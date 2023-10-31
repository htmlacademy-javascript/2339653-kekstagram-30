import { openUploadPictureModal, closeUploadPictureModal } from './form-modal-window.js';
import { getPictures } from './modal-big-picture.js';
import { checksFormValidation } from './validation-data.js';
import { getDataFromServer } from './api.js';
import { errorMessagesForGet } from './error-message.js';


openUploadPictureModal();


checksFormValidation(closeUploadPictureModal);

getDataFromServer(getPictures, errorMessagesForGet);

// sendDataForServer(successMessages);
