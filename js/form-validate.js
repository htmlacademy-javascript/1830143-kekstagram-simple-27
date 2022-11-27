import { imgEditorForm } from './dom_elements.js';
import { showErrorPopup, showSuccessPopup } from './util.js';
import { sendData } from './api.js';
import { submitButton } from './dom_elements.js';

const pristine = new Pristine(imgEditorForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'text__error',
});

const blockSubmitButton = (isBlocked = false) => {
  submitButton.disabled = isBlocked;
  submitButton.textContent = isBlocked ? 'Публикую...' : 'Опубликовать';
};

const setFormSubmit = (onSuccess) => {
  imgEditorForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton(true);
      sendData(
        () => {
          onSuccess();
          blockSubmitButton(false);
          showSuccessPopup();
        },
        () => {
          showErrorPopup();
          blockSubmitButton(false);
        },
        new FormData(evt.target),
      );
    }
  });
};

export { setFormSubmit };
