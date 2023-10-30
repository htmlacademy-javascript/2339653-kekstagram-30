import { getCommentsList } from './list-comments.js';
import { startLogicForCommentShownCount } from './logic-list-comments-modal.js';
import { startLogicForUploadAdditionalComments } from './logic-list-comments-modal.js';
// import { createArrayPhoto } from './data.js';
import { createMiniaturesList } from './miniatures.js';
import { onModalEscapeKeydown } from './util.js';

const bigPictureModal = document.querySelector('.big-picture');
const infoBigPictureModal = document.querySelector('.big-picture__social');

// const miniaturePictures = document.querySelectorAll('.picture');

const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');
const loadCommentsButton = document.querySelector('.comments-loader');
const inputCommentBigPicture = document.querySelector('.social__footer-text');
const COMMENTS_UPLOAD_VOLUME = 5;

const openBigPictureModal = () => {
  bigPictureModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
};

const closeBigPictureModal = () => {
  bigPictureModal.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-loader').classList.remove('hidden');
};

closeModalButton.addEventListener('click', () => {
  closeBigPictureModal();
});

inputCommentBigPicture.addEventListener('blur', () => {
  onModalEscapeKeydown(closeBigPictureModal);
});


startLogicForCommentShownCount(loadCommentsButton, COMMENTS_UPLOAD_VOLUME);

const getPictures = (data) => {
  createMiniaturesList(data);
  const miniaturePictures = document.querySelectorAll('.picture');
  miniaturePictures.forEach((miniaturePicture) => {
    miniaturePicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPictureModal();
      onModalEscapeKeydown(closeBigPictureModal);

      const currentId = miniaturePicture.querySelector('.picture__img').id;
      getCommentsList(currentId, data);
      bigPictureModal.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
      infoBigPictureModal.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
      infoBigPictureModal.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
      infoBigPictureModal.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;

      startLogicForUploadAdditionalComments(loadCommentsButton, COMMENTS_UPLOAD_VOLUME);
    });
  });
};

export { COMMENTS_UPLOAD_VOLUME };
export { getPictures };

