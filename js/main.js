import { closeUploadPictureModalHandler } from './form-modal-window.js';
import { showBigPicture } from './modal-big-picture.js';
import { checksFormValidation } from './validation-data.js';
import { getDataFromServer } from './api.js';
import { createMiniaturesList } from './miniatures.js';
import { setFilterHandlers } from './image-display-filter.js';

checksFormValidation(closeUploadPictureModalHandler);

getDataFromServer((posts) => {
  createMiniaturesList(posts);
  showBigPicture(posts);
  setFilterHandlers(posts);
});
