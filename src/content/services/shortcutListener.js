import Mousetrap from 'mousetrap';
import browser from 'webextension-polyfill';
import { sendMessage } from '@/utils/message';

Mousetrap.prototype.stopCallback = function () {
  return false;
};

function automaCustomEventListener(findWorkflow) {
  window.addEventListener(
    'automa:execute-workflow',
    ({ detail }) => {
      if (!detail || (!detail.id && !detail.publicId)) return;

      const workflowId = detail.id || detail.publicId;
      const workflow = findWorkflow(workflowId, Boolean(detail.publicId));

      if (!workflow) return;

      workflow.options = {
        data: detail.data || {},
      };
      sendMessage('workflow:execute', workflow, 'background');
    },
    true
  );
}
function workflowShortcutsListener(findWorkflow, shortcutsObj) {
  const shortcuts = Object.entries(shortcutsObj);

  if (shortcuts.length === 0) return;

  const keyboardShortcuts = shortcuts.reduce((acc, [id, value]) => {
    const workflow = findWorkflow(id);
    if (!workflow) return acc;

    (acc[value] = acc[value] || []).push({
      id,
      workflow,
      activeInInput: workflow.trigger?.activeInInput || false,
    });

    return acc;
  }, {});

  Mousetrap.bind(Object.keys(keyboardShortcuts), ({ target }, command) => {
    const isInputElement =
      ['INPUT', 'SELECT', 'TEXTAREA'].includes(target.tagName) ||
      target?.contentEditable === 'true';

    keyboardShortcuts[command].forEach((item) => {
      if (!item.activeInInput && isInputElement) return;

      sendMessage('workflow:execute', item.workflow, 'background');
    });

    return true;
  });
}

export default async function () {
  try {
    const { shortcuts, workflows, workflowHosts } =
      await browser.storage.local.get([
        'shortcuts',
        'workflows',
        'workflowHosts',
      ]);
    const workflowsArr = Array.isArray(workflows)
      ? workflows
      : Object.values(workflows);
    const findWorkflow = (id, publicId = false) => {
      let workflow = workflowsArr.find((item) => {
        if (publicId) {
          return item.settings.publicId === id;
        }

        return item.id === id;
      });

      if (!workflow) {
        workflow = Object.values(workflowHosts || {}).find(
          ({ hostId }) => hostId === id
        );

        if (workflow) workflow.id = workflow.hostId;
      }

      return workflow;
    };

    automaCustomEventListener(findWorkflow);
    workflowShortcutsListener(findWorkflow, shortcuts || {});
  } catch (error) {
    console.error(error);
  }
}
