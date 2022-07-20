import browser from 'webextension-polyfill';
import { nanoid } from 'nanoid';
import { tasks } from '@/utils/shared';
import { clearCache, sleep, parseJSON, isObject } from '@/utils/helper';
import dbStorage from '@/db/storage';
import Worker from './worker';

class WorkflowEngine {
  constructor(workflow, { states, logger, blocksHandler, options }) {
    this.id = nanoid();
    this.states = states;
    this.logger = logger;
    this.workflow = workflow;
    this.blocksHandler = blocksHandler;
    this.parentWorkflow = options?.parentWorkflow;
    this.saveLog = workflow.settings?.saveLog ?? true;

    this.workerId = 0;
    this.workers = new Map();

    this.extractedGroup = {};
    this.connectionsMap = {};
    this.waitConnections = {};

    this.isDestroyed = false;
    this.isUsingProxy = false;

    this.triggerBlockId = null;

    this.blocks = {};
    this.history = [];
    this.columnsId = {};
    this.historyCtxData = {};
    this.eventListeners = {};
    this.preloadScripts = [];

    this.columns = {
      column: {
        index: 0,
        type: 'any',
        name: this.workflow.settings?.defaultColumnName || 'column',
      },
    };

    this.logHistoryId = 0;

    let variables = {};
    let { globalData } = workflow;

    if (options && options?.data) {
      globalData = options.data.globalData;
      variables = isObject(options.data.variables)
        ? options?.data.variables
        : {};

      options.data = { globalData, variables };
    }
    this.options = options;

    this.referenceData = {
      variables,
      table: [],
      loopData: {},
      workflow: {},
      googleSheets: {},
      globalData: parseJSON(globalData, globalData),
    };

    this.onDebugEvent = ({ tabId }, method, params) => {
      let isActiveTabEvent = false;
      this.workers.forEach((worker) => {
        if (isActiveTabEvent) return;

        isActiveTabEvent = worker.activeTab.id === tabId;
      });

      if (!isActiveTabEvent) return;

      (this.eventListeners[method] || []).forEach((listener) => {
        listener(params);
      });
    };
    this.onWorkflowStopped = (id) => {
      if (this.id !== id || this.isDestroyed) return;
      this.stop();
    };
  }

  async init() {
    try {
      if (this.workflow.isDisabled) return;

      if (!this.states) {
        console.error(`"${this.workflow.name}" workflow doesn't have states`);
        this.destroy('error');
        return;
      }

      const { nodes, edges } = this.workflow.drawflow;
      if (!nodes || nodes.length === 0) {
        console.error(`${this.workflow.name} doesn't have blocks`);
        return;
      }

      const triggerBlock = nodes.find((node) => node.label === 'trigger');
      if (!triggerBlock) {
        console.error(`${this.workflow.name} doesn't have a trigger block`);
        return;
      }

      this.triggerBlockId = triggerBlock.id;

      this.blocks = nodes.reduce((acc, node) => {
        acc[node.id] = node;

        return acc;
      }, {});
      this.connectionsMap = edges.reduce((acc, { sourceHandle, target }) => {
        if (!acc[sourceHandle]) acc[sourceHandle] = [];

        acc[sourceHandle].push(target);

        return acc;
      }, {});

      const workflowTable = this.workflow.table || this.workflow.dataColumns;
      let columns = Array.isArray(workflowTable)
        ? workflowTable
        : Object.values(workflowTable);

      if (this.workflow.connectedTable) {
        const connectedTable = await dbStorage.tablesItems
          .where('id')
          .equals(this.workflow.connectedTable)
          .first();
        const connectedTableData = await dbStorage.tablesData
          .where('tableId')
          .equals(connectedTable?.id)
          .first();
        if (connectedTable && connectedTableData) {
          columns = Object.values(connectedTable.columns);
          Object.assign(this.columns, connectedTableData.columnsIndex);
          this.referenceData.table = connectedTableData.items || [];
        } else {
          this.workflow.connectedTable = null;
        }
      }

      const variables = await dbStorage.variables.toArray();
      variables.forEach(({ name, value }) => {
        this.referenceData.variables[`$$${name}`] = value;
      });

      columns.forEach(({ name, type, id }) => {
        const columnId = id || name;

        this.columnsId[name] = columnId;
        if (!this.columns[columnId])
          this.columns[columnId] = { index: 0, name, type };
      });

      if (BROWSER_TYPE !== 'chrome') {
        this.workflow.settings.debugMode = false;
      }
      if (this.workflow.settings.debugMode) {
        chrome.debugger.onEvent.addListener(this.onDebugEvent);
      }
      if (
        this.workflow.settings.reuseLastState &&
        !this.workflow.connectedTable
      ) {
        const lastStateKey = `state:${this.workflow.id}`;
        const value = await browser.storage.local.get(lastStateKey);
        const lastState = value[lastStateKey];

        if (lastState) {
          Object.assign(this.columns, lastState.columns);
          Object.assign(this.referenceData, lastState.referenceData);
        }
      }

      this.workflow.table = columns;
      this.startedTimestamp = Date.now();

      this.states.on('stop', this.onWorkflowStopped);

      await this.states.add(this.id, {
        id: this.id,
        state: this.state,
        workflowId: this.workflow.id,
        parentState: this.parentWorkflow,
      });
      this.addWorker({ blockId: triggerBlock.id });
    } catch (error) {
      console.error(error);
    }
  }

  resume({ id, state }) {
    this.id = id;

    Object.keys(state).forEach((key) => {
      this[key] = state[key];
    });

    this.init(state.currentBlock);
  }

  addWorker(detail) {
    this.workerId += 1;

    const workerId = `worker-${this.workerId}`;
    const worker = new Worker(workerId, this);
    worker.init(detail);

    this.workers.set(worker.id, worker);
  }

  addLogHistory(detail) {
    if (detail.name === 'blocks-group') return;

    const isLimit = this.history.length >= 1001;
    const notErrorLog = detail.type !== 'error';

    if ((isLimit || !this.saveLog) && notErrorLog) return;

    this.logHistoryId += 1;
    detail.id = this.logHistoryId;

    if (
      detail.name !== 'delay' ||
      detail.replacedValue ||
      detail.name === 'javascript-code' ||
      (tasks[detail.name]?.refDataKeys && this.saveLog)
    ) {
      const { activeTabUrl, variables, loopData } = JSON.parse(
        JSON.stringify(this.referenceData)
      );

      this.historyCtxData[this.logHistoryId] = {
        referenceData: {
          loopData,
          variables,
          activeTabUrl,
          prevBlockData: detail.prevBlockData || '',
        },
        replacedValue: detail.replacedValue,
      };

      delete detail.replacedValue;
    }

    this.history.push(detail);
  }

  async stop() {
    try {
      if (this.childWorkflowId) {
        await this.states.stop(this.childWorkflowId);
      }

      await this.destroy('stopped');
    } catch (error) {
      console.error(error);
    }
  }

  async executeQueue() {
    const { workflowQueue } = await browser.storage.local.get('workflowQueue');
    const queueIndex = (workflowQueue || []).indexOf(this.workflow.id);

    if (!workflowQueue || queueIndex === -1) return;

    const engine = new WorkflowEngine(this.workflow, {
      logger: this.logger,
      states: this.states,
      blocksHandler: this.blocksHandler,
    });
    engine.init();

    workflowQueue.splice(queueIndex, 1);

    await browser.storage.local.set({ workflowQueue });
  }

  destroyWorker(workerId) {
    this.workers.delete(workerId);

    if (this.workers.size === 0) {
      this.addLogHistory({
        type: 'finish',
        name: 'finish',
      });
      this.dispatchEvent('finish');
      this.destroy('success');
    }
  }

  async destroy(status, message) {
    try {
      if (this.isDestroyed) return;
      if (this.isUsingProxy) browser.proxy.settings.clear({});
      if (this.workflow.settings.debugMode && BROWSER_TYPE === 'chrome') {
        chrome.debugger.onEvent.removeListener(this.onDebugEvent);

        await sleep(1000);

        this.workers.forEach((worker) => {
          if (!worker.debugAttached) return;

          chrome.debugger.detach({ tabId: worker.activeTab.id });
        });
      }

      const endedTimestamp = Date.now();
      this.workers.clear();
      this.executeQueue();

      if (!this.workflow.isTesting) {
        const { name, id } = this.workflow;

        await this.logger.add({
          detail: {
            name,
            status,
            message,
            id: this.id,
            workflowId: id,
            endedAt: endedTimestamp,
            parentLog: this.parentWorkflow,
            startedAt: this.startedTimestamp,
          },
          history: {
            logId: this.id,
            data: this.saveLog ? this.history : [],
          },
          ctxData: {
            logId: this.id,
            data: this.historyCtxData,
          },
          data: {
            logId: this.id,
            data: {
              table: this.referenceData.table,
              variables: this.referenceData.variables,
            },
          },
        });
      }

      this.states.off('stop', this.onWorkflowStopped);
      await this.states.delete(this.id);

      this.dispatchEvent('destroyed', {
        status,
        message,
        id: this.id,
        currentBlock: this.currentBlock,
      });

      if (this.workflow.settings.reuseLastState) {
        const workflowState = {
          [`state:${this.workflow.id}`]: {
            columns: this.columns,
            referenceData: {
              table: this.referenceData.table,
              variables: this.referenceData.variables,
            },
          },
        };

        browser.storage.local.set(workflowState);
      } else if (status === 'success') {
        clearCache(this.workflow);
      }

      const { table, variables } = this.referenceData;
      const tableId = this.workflow.connectedTable;

      await dbStorage.transaction(
        'rw',
        dbStorage.tablesItems,
        dbStorage.tablesData,
        dbStorage.variables,
        async () => {
          if (tableId) {
            await dbStorage.tablesItems.update(tableId, {
              modifiedAt: Date.now(),
              rowsCount: table.length,
            });
            await dbStorage.tablesData.where('tableId').equals(tableId).modify({
              items: table,
              columnsIndex: this.columns,
            });
          }

          for (const key in variables) {
            if (key.startsWith('$$')) {
              const varName = key.slice(2);
              const varValue = variables[key];

              const variable =
                (await dbStorage.variables
                  .where('name')
                  .equals(varName)
                  .first()) || {};
              variable.name = varName;
              variable.value = varValue;

              await dbStorage.variables.put(variable);
            }
          }
        }
      );

      this.isDestroyed = true;
      this.referenceData = {};
      this.eventListeners = {};
    } catch (error) {
      console.error(error);
    }
  }

  async updateState(data) {
    const state = {
      ...data,
      tabIds: [],
      currentBlock: [],
      name: this.workflow.name,
      logs: this.history.slice(-5),
      startedTimestamp: this.startedTimestamp,
    };

    this.workers.forEach((worker) => {
      const { id, label, startedAt } = worker.currentBlock;

      state.currentBlock.push({ id, name: label, startedAt });
      state.tabIds.push(worker.activeTab.id);
    });

    await this.states.update(this.id, { state });
    this.dispatchEvent('update', { state });
  }

  dispatchEvent(name, params) {
    const listeners = this.eventListeners[name];

    if (!listeners) return;

    listeners.forEach((callback) => {
      callback(params);
    });
  }

  on(name, listener) {
    (this.eventListeners[name] = this.eventListeners[name] || []).push(
      listener
    );
  }
}

export default WorkflowEngine;
