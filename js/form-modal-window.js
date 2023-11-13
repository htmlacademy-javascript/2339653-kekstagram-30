import { isEscapeKey, onStopIsEscapeKey } from './util.js';
import { hashtagInput, commentsInput, pristine } from './validation-data.js';
import { effectLevelContauner, effectLevelValue } from './slider.js';
import { fotoPreview, sizeFotoPreview, MAX_SIZE_VALUE } from './changing-picture-size.js';
import { pictureUpload } from './upload-foto.js';
import { effectRadioButtons, removeCheckedsRadioHandler } from './slider.js';

const overlayForForm = document.querySelector('.img-upload__overlay');
const uploadFotoInput = document.querySelector('.img-upload__input');
const closeButtonUploadPictureModal = document.querySelector('.img-upload__cancel');

const clearFieldsUploadPictureModal = () => {
  uploadFotoInput.value = '';
  hashtagInput.value = '';
  commentsInput.value = '';
  pristine.reset();
  effectLevelContauner.classList.add('hidden');
  fotoPreview.removeAttribute('class');
  fotoPreview.removeAttribute('style');
  sizeFotoPreview.setAttribute('value', `${MAX_SIZE_VALUE}%`);
};

const onCloseFromKeyboard = (evt) => {
  if (document.querySelectorAll('.error__inner').length > 0) {
    return;
  }
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    closeUploadPictureModalHandler();
  }
};

function closeUploadPictureModalHandler () {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  clearFieldsUploadPictureModal();
  removeCheckedsRadioHandler();
  effectRadioButtons[0].setAttribute('checked', '');
  effectRadioButtons[0].checked = true;
  effectLevelValue.setAttribute('value', '');
  document.removeEventListener('keydown', onCloseFromKeyboard);
}

function openUploadPictureModalHandler () {
  overlayForForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onCloseFromKeyboard);
  pictureUpload();
}

onStopIsEscapeKey(hashtagInput);
onStopIsEscapeKey(commentsInput);

closeButtonUploadPictureModal.addEventListener('click', () => {
  closeUploadPictureModalHandler();
});

uploadFotoInput.addEventListener('change', () => {
  openUploadPictureModalHandler();
});

export { openUploadPictureModalHandler, closeUploadPictureModalHandler, clearFieldsUploadPictureModal };


