import { parseJSON, isXPath } from '@/utils/helper';

async function loopData({ data, id }, { refData }) {
  try {
    if (this.loopList[data.loopId]) {
      const index = this.loopList[data.loopId].index + 1;

      this.loopList[data.loopId].index = index;

      let currentLoopData;

      if (data.loopThrough === 'numbers') {
        currentLoopData = refData.loopData[data.loopId].data + 1;
      } else {
        currentLoopData = this.loopList[data.loopId].data[index];
      }

      refData.loopData[data.loopId] = {
        data: currentLoopData,
        $index: index,
      };
    } else {
      const getLoopData = {
        numbers: () => data.fromNumber,
        table: () => refData.table,
        'custom-data': () => JSON.parse(data.loopData),
        'data-columns': () => refData.table,
        'google-sheets': () => refData.googleSheets[data.referenceKey],
        variable: () => {
          const variableVal = refData.variables[data.variableName];

          if (Array.isArray(variableVal)) return variableVal;

          return parseJSON(variableVal, variableVal);
        },
        elements: async () => {
          const max = +data.maxLoop || 0;
          const findBy = isXPath(data.elementSelector)
            ? 'xpath'
            : 'cssSelector';
          const { elements, url, loopId } = await this._sendMessageToTab({
            id,
            label: 'loop-data',
            data: {
              max,
              findBy,
              multiple: true,
              selector: data.elementSelector,
              waitForSelector: data.waitForSelector ?? false,
              waitSelectorTimeout: data.waitSelectorTimeout ?? 5000,
            },
          });
          this.loopEls.push({
            url,
            max,
            loopId,
            findBy,
            blockId: id,
            selector: data.elementSelector,
          });

          return elements;
        },
      };

      const currLoopData = await getLoopData[data.loopThrough]();
      let index = 0;

      if (data.loopThrough !== 'numbers') {
        if (!Array.isArray(currLoopData)) {
          throw new Error('invalid-loop-data');
        }

        if (data.resumeLastWorkflow) {
          index = JSON.parse(localStorage.getItem(`index:${id}`)) || 0;
        } else if (data.startIndex > 0) {
          index = data.startIndex;
        }
      }

      this.loopList[data.loopId] = {
        index,
        blockId: id,
        id: data.loopId,
        data: currLoopData,
        type: data.loopThrough,
        maxLoop:
          data.loopThrough === 'numbers'
            ? data.toNumber + 1 - data.fromNumber
            : +data.maxLoop || currLoopData.length,
      };
      /* eslint-disable-next-line */
      refData.loopData[data.loopId] = {
        data:
          data.loopThrough === 'numbers'
            ? data.fromNumber
            : currLoopData[index],
        $index: index,
      };
    }

    localStorage.setItem(`index:${id}`, this.loopList[data.loopId].index);

    return {
      data: refData.loopData[data.loopId],
      nextBlockId: this.getBlockConnections(id),
    };
  } catch (error) {
    if (data.loopThrough === 'elements') {
      error.data = { selector: data.elementSelector };
    }

    throw error;
  }
}

export default loopData;
