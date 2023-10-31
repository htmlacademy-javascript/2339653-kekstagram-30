import { openUploadPictureModal, closeUploadPictureModal } from './form-modal-window.js';
import { getPictures } from './modal-big-picture.js';
import { checksFormValidation } from './validation-data.js';
import { getDataFromServer } from './server.js';
import { errorMessages } from './error-message.js';


openUploadPictureModal();


checksFormValidation(closeUploadPictureModal);

getDataFromServer(getPictures, errorMessages);

// sendDataForServer(successMessages);
