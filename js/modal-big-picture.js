import { miniaturesList } from './get-miniatures.js';
import { getCommentsList } from './get-comments-list.js';
import { isEscapeKey } from './util.js';


const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');
const COMMENTS_UPLOAD_VOLUME = 5;


const openModalBigPicture = () => {
  modalBigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');

  // document.querySelector('.social__comment-count').classList.add('hidden');
  // document.querySelector('.comments-loader').classList.add('hidden');
};

const closeModalBigPicture = () => {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
  document.querySelector('.comments-loader').classList.remove('hidden');
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
    document.querySelector('.social__comment-shown-count').innerHTML = COMMENTS_UPLOAD_VOLUME;
    /**/
    const socialComment = document.querySelectorAll('.social__comment');
    const showButton = document.querySelector('.comments-loader');
    /**/
    if (socialComment.length <= COMMENTS_UPLOAD_VOLUME) {
      showButton.classList.add('hidden');
    }

    for (let i = COMMENTS_UPLOAD_VOLUME; i < socialComment.length; i++) {
      socialComment[i].classList.add('hidden');
    }
    /**/
    const showCount = document.querySelector('.social__comment-shown-count');

    showButton.addEventListener('click', () => {
      let showCountValue = +showCount.textContent;

      console.log(showCountValue);

      if (showCountValue <= socialComment.length && socialComment.length - showCountValue > COMMENTS_UPLOAD_VOLUME) {
        showCount.textContent = showCountValue + COMMENTS_UPLOAD_VOLUME;

      } else {
        showCount.textContent = socialComment.length - showCountValue + showCountValue;
        showButton.classList.add('hidden');
        showCountValue = 0;
      }

    });


  });
});

closeModalButton.addEventListener('click', () => {
  closeModalBigPicture();
});

export { miniaturePictures };


