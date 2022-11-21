import { resetScale } from './form-scale.js';
import { isEscapeKey } from './util.js';
import { imgEditorElement, imgEditorOpenElement, imgEditorcloseElement, bodyElement, commentElement } from './dom_elements.js';
import { resetEffect } from './form-effects.js';

const EMPTY_VALUE = '';

const onEditorEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeImgEditor();
  }
};

const clearFieldValue = (field) => {
  field.value = EMPTY_VALUE;
};

const clearElementTextContent = (element) => {
  element.textContent = EMPTY_VALUE;
};

const removeValidateErrorMassage = () => {
  const text = document.querySelector('.text');
  const textError = text.querySelector('.text__error');
  if (textError) {
    clearElementTextContent(textError);
  }
};

const openImgEditor = () => {
  imgEditorElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEditorEscKeydown);
};

const closeImgEditor = () => {
  imgEditorElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEditorEscKeydown);
  clearFieldValue (imgEditorOpenElement);
  clearFieldValue (commentElement);
  removeValidateErrorMassage();
  resetScale();
  resetEffect();
};

imgEditorOpenElement.addEventListener('change', () => {
  openImgEditor();
});

imgEditorcloseElement.addEventListener('click', () => {
  closeImgEditor();
});

export { openImgEditor, closeImgEditor, onEditorEscKeydown };
