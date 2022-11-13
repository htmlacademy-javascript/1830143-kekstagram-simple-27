import { isEscapeKey } from './util.js';

const imgEditorForm = document.querySelector('.img-upload__form');
const imgEditorElement = document.querySelector('.img-upload__overlay');
const imgEditorOpenElement = document.querySelector('#upload-file');
const imgEditorcloseElement = imgEditorElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');
const commentElement = imgEditorForm.querySelector('.text__description');
const EMPTY_VALUE = '';

const ImgUpload = () => {
  const onEditorEscKeydown = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      // eslint-disable-next-line no-use-before-define
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
  };

  imgEditorOpenElement.addEventListener('change', () => {
    openImgEditor();
  });

  imgEditorcloseElement.addEventListener('click', () => {
    closeImgEditor();
  });
};

const validateImgEditorForm = () => {
  const pristine = new Pristine(imgEditorForm, {
    classTo: 'img-upload__text',
    errorTextParent: 'img-upload__text',
    errorTextClass: 'text__error',
  });

  imgEditorForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      // eslint-disable-next-line no-console
      console.log('Можно отправлять');
    } else {
      // eslint-disable-next-line no-console
      console.log('Форма невалидна');
    }
  });
};

export {ImgUpload, validateImgEditorForm};
