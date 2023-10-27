import { openUploadPictureModal } from './form-modal-window.js';
import { getPictures } from './modal-big-picture.js';
import { validateHashtags } from './validation-data.js';
import { sliderElement } from './slider.js';

getPictures();
openUploadPictureModal();
validateHashtags();

