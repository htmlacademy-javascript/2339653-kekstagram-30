import { miniaturesList } from './get-miniatures.js';
import { getCommentsList } from './get-comments-list.js';
import { isEscapeKey } from './util.js';


const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');

const openModalBigPicture = () => {
  modalBigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.querySelector('.social__comment-count').classList.add('hidden');
  document.querySelector('.comments-loader').classList.add('hidden');
};

const closeModalBigPicture = () => {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};

const onModalEscapeKeydown = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeModalBigPicture();
    }
  }, { once: true });
};

miniaturePictures.forEach((miniaturePicture) => {
  miniaturePicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModalBigPicture();
    onModalEscapeKeydown();

    modalBigPicture.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
    infoModalBigPicture.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
    infoModalBigPicture.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
    infoModalBigPicture.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;
    const currentId = miniaturePicture.querySelector('.picture__img').id;
    getCommentsList(currentId);

  });
});

closeModalButton.addEventListener('click', () => {
  closeModalBigPicture();
});

export { miniaturePictures };
