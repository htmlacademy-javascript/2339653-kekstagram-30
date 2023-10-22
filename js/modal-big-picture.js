import { getCommentsList } from './list-comments.js';
import { isEscapeKey } from './util.js';
import { startLogicForCommentShownCount } from './logic-list-comments-modal.js';
import { startLogicForUploadAdditionalComments } from './logic-list-comments-modal.js';
import { createArrayPhoto } from './data.js';
import { createMiniaturesList } from './miniatures.js';

const bigPictureModal = document.querySelector('.big-picture');
const infoBigPictureModal = document.querySelector('.big-picture__social');

const miniaturePictures = createMiniaturesList(createArrayPhoto).querySelectorAll('.picture');

const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');
const loadCommentsButton = document.querySelector('.comments-loader');
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

const onModalEscapeKeydown = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeBigPictureModal();
    }
  }, { once: true });
};

const getPictures = () => {
  miniaturePictures.forEach((miniaturePicture) => {
    miniaturePicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPictureModal();
      onModalEscapeKeydown();

      const currentId = miniaturePicture.querySelector('.picture__img').id;
      getCommentsList(currentId, createArrayPhoto);
      bigPictureModal.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
      infoBigPictureModal.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
      infoBigPictureModal.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
      infoBigPictureModal.querySelector('.social__comment-total-count').textContent = miniaturePicture.querySelector('.picture__comments').textContent;

      startLogicForUploadAdditionalComments(loadCommentsButton, COMMENTS_UPLOAD_VOLUME);
    });
  });
};

closeModalButton.addEventListener('click', () => {
  closeBigPictureModal();
});

startLogicForCommentShownCount(loadCommentsButton, COMMENTS_UPLOAD_VOLUME);

export { COMMENTS_UPLOAD_VOLUME };
export { getPictures };
