import { getCommentsList } from './list-comments.js';
import { startLogicForCommentShownCount } from './logic-list-comments-modal.js';
import { startLogicForUploadAdditionalComments } from './logic-list-comments-modal.js';
import { isEscapeKey /* onModalEscapeKeydown*/ } from './util.js';

const COMMENTS_UPLOAD_VOLUME = 5;

const bigPictureModal = document.querySelector('.big-picture');
const infoBigPictureModal = document.querySelector('.big-picture__social');
const closeModalButton = bigPictureModal.querySelector('.big-picture__cancel');
const loadCommentsButton = document.querySelector('.comments-loader');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPictureModal();
  }
};

function openBigPictureModal() {
  bigPictureModal.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeBigPictureModal () {
  bigPictureModal.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-loader').classList.remove('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

closeModalButton.addEventListener('click', () => {
  closeBigPictureModal();

});

startLogicForCommentShownCount(loadCommentsButton, COMMENTS_UPLOAD_VOLUME);

const showBigPicture = (data) => {
  const miniaturePictures = document.querySelectorAll('.picture');
  miniaturePictures.forEach((miniaturePicture, index) => {
    miniaturePicture.addEventListener('click', (evt) => {
      evt.preventDefault();
      openBigPictureModal();

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

