import { getCommentsList } from './list-comments.js';
import { startLogicForCommentShownCount } from './logic-list-comments-modal.js';
import { startLogicForUploadAdditionalComments } from './logic-list-comments-modal.js';
import { onModalEscapeKeydown } from './util.js';

const COMMENTS_UPLOAD_VOLUME = 5;

const bigPictureModal = document.querySelector('.big-picture');
const infoBigPictureModal = document.querySelector('.big-picture__social');
const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');
const loadCommentsButton = document.querySelector('.comments-loader');
const inputCommentBigPicture = document.querySelector('.social__footer-text');

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

const showBigPicture = (data) => {
  const miniaturePictures = document.querySelectorAll('.picture');
  miniaturePictures.forEach((miniaturePicture, index) => {
    miniaturePicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPictureModal();
      onModalEscapeKeydown(closeBigPictureModal);

      const currentId = miniaturePicture.querySelector('.picture__img').id;
      getCommentsList(currentId, data);
      bigPictureModal.querySelector('img').src = data[index].url;
      infoBigPictureModal.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
      infoBigPictureModal.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
      infoBigPictureModal.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;
      let currentCommentShown = infoBigPictureModal.querySelectorAll('.social__comment').length;
      if (currentCommentShown > COMMENTS_UPLOAD_VOLUME) {
        currentCommentShown = COMMENTS_UPLOAD_VOLUME;
      }
      startLogicForUploadAdditionalComments(loadCommentsButton, currentCommentShown);
    });
  });
};

export { showBigPicture };

