import { onEditorEscKeydown } from './form-modal.js';
import { bodyElement, imgEditorElement } from './dom_elements.js';

const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onSuccessPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessPopup();
  }
};

const onErrorPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    document.addEventListener('keydown', onEditorEscKeydown);
  }
};

const onClick = (evt) => {
  if (!evt.target.matches('.success__inner') && !evt.target.matches('.error__inner')) {
    evt.target.remove();
    evt.target.removeEventListener('click', onClick);
    document.removeEventListener('keydown', onSuccessPopupEscKeydown);
    document.removeEventListener('keydown', onErrorPopupEscKeydown);
    if (!(evt.target.matches('.success__button') || evt.target.matches('.success'))) {
      document.removeEventListener('keydown', onEditorEscKeydown);
      imgEditorElement.classList.remove('hidden');
    }
  }
};

function closeSuccessPopup () {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onSuccessPopupEscKeydown);
}

const showSuccessPopup = () => {
  const successPopupTemplate = document.querySelector('#success').content.querySelector('.success');
  const successPopup = successPopupTemplate.cloneNode(true);
  bodyElement.appendChild(successPopup);
  document.addEventListener('keydown', onSuccessPopupEscKeydown);
  successPopup.querySelector('.success__button').addEventListener('click', closeSuccessPopup);
  successPopup.addEventListener('click', onClick);
};

const closeErrorPopup = () => {
  imgEditorElement.classList.remove('.hidden');
  document.querySelector('.error').remove();
  document.removeEventListener('keydown', onErrorPopupEscKeydown);
};

const showErrorPopup = () => {
  imgEditorElement.classList.add('.hidden');
  const errorPopupTemplate = document.querySelector('#error').content.querySelector('.error');
  const errorPopup = errorPopupTemplate.cloneNode(true);
  bodyElement.appendChild(errorPopup);
  document.removeEventListener('keydown', onEditorEscKeydown);
  document.addEventListener('keydown', onErrorPopupEscKeydown);
  errorPopup.querySelector('.error__button').addEventListener('click', closeErrorPopup);
  errorPopup.addEventListener('click', onClick);
};

const showAlert = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = 'Ошибка загрузки';

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { isEscapeKey, showAlert, showSuccessPopup, showErrorPopup };
