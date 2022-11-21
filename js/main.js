import { renderThumbnails } from './thumbnails.js';
import { closeImgEditor } from './form-modal.js';
import { setFormSubmit } from './form-validate.js';
import { getData } from './api.js';
import { showAlert } from './util.js';

getData((pictures) => renderThumbnails(pictures), () => showAlert('Ошибка загрузки'));

setFormSubmit(closeImgEditor);
