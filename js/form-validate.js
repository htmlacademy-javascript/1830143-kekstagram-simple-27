import { imgEditorForm } from './dom_elements.js';
import { showAlert } from './util.js';
import { sendData } from './api.js';
import { submitButton } from './dom_elements.js';

const pristine = new Pristine(imgEditorForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__error',
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'ПУБЛИКУЮ...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'ОПУБЛИКОВАТЬ';
};

const setFormSubmit = (onSuccess) => {
  imgEditorForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setFormSubmit };
