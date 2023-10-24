import { isEscapeKey } from './util.js';

const formUploadFoto = document.querySelector('.img-upload__form');
const uploadFotoInput = document.querySelector('.img-upload__input');
const overlayForForm = document.querySelector('.img-upload__overlay');
const closeUploadPictureModalButton = document.querySelector('.img-upload__cancel');

uploadFotoInput.addEventListener('change', () => {
  overlayForForm.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
});

const closeUploadPictureModal = () => {
  overlayForForm.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  // uploadFotoInput.textContent = '';
};

closeUploadPictureModalButton.addEventListener('click', () => {
  closeUploadPictureModal();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    // evt.preventDefault();
    closeUploadPictureModal();
  }
}, { once: true });

const pristine = new Pristine(formUploadFoto);

formUploadFoto.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    console.log('можно отправлять');
  } else {
    console.log('нельзя отправлять')
  };

});


const hashtagInput = document.querySelector('.text__hashtags');
const outlineDefaultStyle = hashtagInput.style.outline;
const hashtagTest = /^#[a-zа-яё0-9]{1,19}$/i;

hashtagInput.addEventListener('change', () => {
  const hashtagArray = hashtagInput.value.replace(/ +/g, ' ').trim().split(' ');

  console.log(hashtagArray);


});





export { uploadFotoInput };
