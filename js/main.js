import { renderThumbnails } from './thumbnails.js';
import { closeImgEditor } from './form-modal.js';
import { setFormSubmit } from './form-validate.js';
import { getData } from './api.js';

// renderThumbnails();
// ImgUpload();
getData((pictures) => {
  renderThumbnails(pictures);
});

setFormSubmit(closeImgEditor);
