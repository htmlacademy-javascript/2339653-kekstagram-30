import { stopIsEscapeKey } from './util.js';
import { onModalEscapeKeydown } from './util.js';
import { hashtagInput, commentsInput, pristine } from './validation-data.js';
import { effectLevelContauner } from './slider.js';
import { fotoPreview, sizeFotoPreviev, MAX_SIZE_VALUE } from './changing-picture-size.js';
import { pictureUpload } from './upload-foto.js';

const overlayForForm = document.querySelector('.img-upload__overlay');
const uploadFotoInput = document.querySelector('.img-upload__input');
const closeUploadPictureModalButton = document.querySelector('.img-upload__cancel');

const clearsFieldsUploadPictureModal = () => {
  sizeFotoPreviev.value = `${MAX_SIZE_VALUE}%`;
  uploadFotoInput.value = '';
  hashtagInput.value = '';
  commentsInput.value = '';
  pristine.reset();
  effectLevelContauner.classList.add('hidden');
  fotoPreview.removeAttribute('class');
  fotoPreview.removeAttribute('style');
};

const closeUploadPictureModal = () => {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  clearsFieldsUploadPictureModal();
};

const openUploadPictureModal = () => {
  overlayForForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  onModalEscapeKeydown(closeUploadPictureModal);
};

hashtagInput.addEventListener('blur', () => {
  onModalEscapeKeydown(closeUploadPictureModal);
});

stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

closeUploadPictureModalButton.addEventListener('click', () => {
  closeUploadPictureModal();
});


uploadFotoInput.addEventListener('change', () => {
  openUploadPictureModal();
  pictureUpload();
});

export { openUploadPictureModal, closeUploadPictureModal, clearsFieldsUploadPictureModal, overlayForForm };


