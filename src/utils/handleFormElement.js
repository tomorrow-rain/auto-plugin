import { sleep } from '@/utils/helper';
import { keyDefinitions } from '@/utils/USKeyboardLayout';
import simulateEvent from './simulateEvent';

const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
  window.HTMLInputElement.prototype,
  'value'
).set;
function reactJsEvent(element, value) {
  if (!element._valueTracker) return;

  nativeInputValueSetter.call(element, value);
}

function formEvent(element, data) {
  if (data.type === 'text-field') {
    const currentKey = /\s/.test(data.value) ? 'Space' : data.value;
    const { key, keyCode, code } = keyDefinitions[currentKey] || {
      key: currentKey,
      keyCode: 0,
      code: `Key${currentKey}`,
    };

    simulateEvent(element, 'keydown', {
      key,
      code,
      keyCode,
      bubbles: true,
      cancelable: true,
    });
    simulateEvent(element, 'keyup', {
      key,
      code,
      keyCode,
      bubbles: true,
      cancelable: true,
    });
  }

  simulateEvent(element, 'input', {
    inputType: 'insertText',
    data: data.value,
    bubbles: true,
    cancelable: true,
  });

  if (data.type !== 'text-field') {
    element.dispatchEvent(
      new Event('change', { bubbles: true, cancelable: true })
    );
  }
}
async function inputText({ data, element, isEditable }) {
  element?.focus();
  const elementKey = isEditable ? 'textContent' : 'value';

  if (data.delay > 0 && !document.hidden) {
    for (let index = 0; index < data.value.length; index += 1) {
      const currentChar = data.value[index];
      element[elementKey] += currentChar;

      if (elementKey === 'value') reactJsEvent(element, element.value);

      formEvent(element, {
        type: 'text-field',
        value: currentChar,
        isEditable,
      });

      await sleep(data.delay);
    }
  } else {
    element[elementKey] += data.value;

    if (elementKey === 'value') reactJsEvent(element, element.value);

    formEvent(element, {
      isEditable,
      type: 'text-field',
      value: data.value[0] ?? '',
    });
  }

  element.dispatchEvent(
    new Event('change', { bubbles: true, cancelable: true })
  );

  element?.blur();
}

export default async function (element, data) {
  const textFields = ['INPUT', 'TEXTAREA'];
  const isEditable =
    element.hasAttribute('contenteditable') && element.isContentEditable;

  if (isEditable) {
    if (data.clearValue) element.innerText = '';

    await inputText({ data, element, isEditable });
    return;
  }

  if (data.type === 'text-field' && textFields.includes(element.tagName)) {
    if (data.clearValue) element.value = '';

    await inputText({ data, element });
    return;
  }

  if (data.type === 'checkbox' || data.type === 'radio') {
    element?.focus();
    element.checked = data.selected;
    formEvent(element, { type: data.type, value: data.selected });
    element?.blur();
    return;
  }

  if (data.type === 'select') {
    element?.focus();
    element.value = data.value;
    element?.blur();
    formEvent(element, data);
  }
}
