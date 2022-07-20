import { customAlphabet } from 'nanoid/non-secure';
import { sendMessage } from '@/utils/message';
import { automaRefDataStr } from '../utils';

const nanoid = customAlphabet('1234567890abcdef', 5);

function getAutomaScript(refData, everyNewTab) {
  const varName = `automa${nanoid()}`;

  let str = `
const ${varName} = ${JSON.stringify(refData)};
${automaRefDataStr(varName)}
function automaSetVariable(name, value) {
  ${varName}.variables[name] = value;
}
function automaNextBlock(data, insert = true) {
  document.body.dispatchEvent(new CustomEvent('__automa-next-block__', { detail: { data, insert, refData: ${varName} } }));
}
function automaResetTimeout() {
 document.body.dispatchEvent(new CustomEvent('__automa-reset-timeout__'));
}
  `;

  if (everyNewTab) str = automaRefDataStr(varName);

  return str;
}

function javascriptCode(block) {
  const automaScript = getAutomaScript(block.refData, block.data.everyNewTab);

  return new Promise((resolve, reject) => {
    let documentCtx = document;

    if (block.frameSelector) {
      const iframeCtx = document.querySelector(
        block.frameSelector
      )?.contentDocument;

      if (!iframeCtx) {
        reject(new Error('iframe-not-found'));
        return;
      }

      documentCtx = iframeCtx;
    }

    const scriptAttr = `block--${block.id}`;
    const isScriptExists = documentCtx.querySelector(
      `.automa-custom-js[${scriptAttr}]`
    );

    if (isScriptExists) {
      resolve('');
      return;
    }

    const promisePreloadScripts =
      block.data?.preloadScripts?.map(async (item) => {
        try {
          const { protocol } = new URL(item.src);
          const isValidUrl = /https?/.test(protocol);

          if (!isValidUrl) return null;

          const script = await sendMessage(
            'fetch:text',
            item.src,
            'background'
          );
          const scriptEl = documentCtx.createElement('script');

          scriptEl.type = 'text/javascript';
          scriptEl.innerHTML = script;

          return {
            ...item,
            script: scriptEl,
          };
        } catch (error) {
          return null;
        }
      }) || [];

    Promise.allSettled(promisePreloadScripts).then((result) => {
      const preloadScripts = result.reduce((acc, { status, value }) => {
        if (status !== 'fulfilled' || !value) return acc;

        acc.push(value);
        documentCtx.body.appendChild(value.script);

        return acc;
      }, []);

      const script = document.createElement('script');

      script.setAttribute(scriptAttr, '');
      script.classList.add('automa-custom-js');
      script.innerHTML = `(() => {
        ${automaScript}

        try {
          ${block.data.code}
        } catch (error) {
          console.error(error);
          automaNextBlock({ $error: true, message: error.message });
        }
      })()`;

      if (!block.data.everyNewTab) {
        let timeout;

        const cleanUp = (detail = {}) => {
          script.remove();
          preloadScripts.forEach((item) => {
            if (item.removeAfterExec) item.script.remove();
          });

          clearTimeout(timeout);

          resolve({
            columns: {
              data: detail?.data,
              insert: detail?.insert,
            },
            variables: detail?.refData?.variables,
          });
        };

        documentCtx.body.addEventListener(
          '__automa-next-block__',
          ({ detail }) => {
            cleanUp(detail || {});
          }
        );
        documentCtx.body.addEventListener('__automa-reset-timeout__', () => {
          clearTimeout(timeout);

          timeout = setTimeout(cleanUp, block.data.timeout);
        });

        timeout = setTimeout(cleanUp, block.data.timeout);
      } else {
        resolve();
      }
      documentCtx.body.appendChild(script);
    });
  });
}

export default javascriptCode;
