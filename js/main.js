import { closeUploadPictureModal } from './form-modal-window.js';
import { showBigPicture } from './modal-big-picture.js';
import { checksFormValidation } from './validation-data.js';
import { getDataFromServer } from './api.js';
import { createMiniaturesList } from './miniatures.js';
import { setFilterHandlers } from './image-display-filter.js';
import './upload-foto.js';

checksFormValidation(closeUploadPictureModal);

getDataFromServer((posts) => {
  createMiniaturesList(posts);
  showBigPicture(posts);
  setFilterHandlers(posts);
});


