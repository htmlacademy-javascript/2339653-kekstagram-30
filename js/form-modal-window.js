import { isEscapeKey, stopIsEscapeKey } from './util.js';
// import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine } from './validation-data.js';
import { effectLevelContauner } from './slider.js';
import { fotoPreview, sizeFotoPreview, MAX_SIZE_VALUE } from './changing-picture-size.js';
import { pictureUpload } from './upload-foto.js';
import { effectRadioButtons, removeCheckedRadio } from './slider.js';

const overlayForForm = document.querySelector('.img-upload__overlay');
const uploadFotoInput = document.querySelector('.img-upload__input');
const closeUploadPictureModalButton = document.querySelector('.img-upload__cancel');

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
    closeUploadPictureModal();
  }
};

function closeUploadPictureModal () {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  clearFieldsUploadPictureModal();
  removeCheckedRadio();
  effectRadioButtons[0].setAttribute('checked', '');
  effectRadioButtons[0].checked = true;
  document.removeEventListener('keydown', onCloseFromKeyboard);
}

function openUploadPictureModal () {
  overlayForForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onCloseFromKeyboard);
  pictureUpload();
}

// hashtagInput.addEventListener('blur', () => {
//   onCloseFromKeyboard();
// });

// commentsInput.addEventListener('blur', () => {
//   onModalEscapeKeydown(closeUploadPictureModal);
// });

stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

closeUploadPictureModalButton.addEventListener('click', () => {
  closeUploadPictureModal();
});

uploadFotoInput.addEventListener('change', () => {
  openUploadPictureModal();
});

export { openUploadPictureModal, closeUploadPictureModal, clearFieldsUploadPictureModal };


