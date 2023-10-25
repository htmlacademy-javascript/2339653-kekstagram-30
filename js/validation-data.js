import { stopIsEscapeKey } from './util.js';
import { onModalEscapeKeydown } from './util.js';
import { isRepeatElement } from './util.js';

const formUploadFoto = document.querySelector('.img-upload__form');
const uploadFotoInput = document.querySelector('.img-upload__input');
const overlayForForm = document.querySelector('.img-upload__overlay');
const closeUploadPictureModalButton = document.querySelector('.img-upload__cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');
const pristine = new Pristine(formUploadFoto);
const hashtagTest = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_AMOUNT = 5;

stopIsEscapeKey(hashtagInput);
stopIsEscapeKey(commentsInput);

const closeUploadPictureModal = () => {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  uploadFotoInput.value = '';
};

closeUploadPictureModalButton.addEventListener('click', () => {
  closeUploadPictureModal();
});

uploadFotoInput.addEventListener('change', () => {
  overlayForForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  onModalEscapeKeydown(closeUploadPictureModal);
});

const validateHashtags = () => {
  const hashtagArray = hashtagInput.value.toLowerCase().replace(/ +/g, ' ').trim().split(' ');

  if (hashtagArray[0] === '') {
    return true;
  } else if (hashtagArray.length <= MAX_HASHTAG_AMOUNT && !isRepeatElement(hashtagArray)) {
    return hashtagArray.every((hashtag) => hashtagTest.test(hashtag));
  }
};

pristine.addValidator(hashtagInput, validateHashtags);

formUploadFoto.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    console.log('можно отправлять');
  } else {
    console.log('нельзя отправлять');
  };
});

export { validateHashtags };


