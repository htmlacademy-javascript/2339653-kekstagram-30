import { miniaturesList } from './miniatures.js';
import { getCommentsList } from './comments-list.js';
import { isEscapeKey } from './util.js';
import { logic1 } from './list-comment-logic.js';
import { logic2 } from './list-comment-logic.js';


const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');
const showButton = document.querySelector('.comments-loader');
const COMMENTS_UPLOAD_VOLUME = 5;


const openModalBigPicture = () => {
  modalBigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
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
    logic2();

    // document.querySelector('.social__comment-shown-count').textContent = COMMENTS_UPLOAD_VOLUME;
    // const socialComment = document.querySelectorAll('.social__comment');
    // socialComment.forEach((element) => element.classList.add('hidden'));

    // if (socialComment.length <= COMMENTS_UPLOAD_VOLUME) {
    //   showButton.classList.add('hidden');
    // }

    // let current = 5;

    // const proverka = (increment) => {

    //   for (let i = 0 + increment; i < current && current; i++) {
    //     if (current > socialComment.length) {
    //       current = socialComment.length;
    //     }
    //     socialComment[i].classList.remove('hidden');

    //   } current = current + COMMENTS_UPLOAD_VOLUME;
    // };
    // proverka(0);

    // showButton.addEventListener('click', () => {
    //   const increment = COMMENTS_UPLOAD_VOLUME;
    //   proverka(increment);
    // });


  });

});

closeModalButton.addEventListener('click', () => {
  closeModalBigPicture();
});

logic1();

export { miniaturePictures };
export { showButton };
export { COMMENTS_UPLOAD_VOLUME };


// showButton.addEventListener('click', () => {
//   const showCount = document.querySelector('.social__comment-shown-count');
//   const socialComment = document.querySelectorAll('.social__comment');
//   let showCountValue = +showCount.textContent;

//   if (showCountValue <= socialComment.length && socialComment.length - showCountValue > COMMENTS_UPLOAD_VOLUME) {
//     showCount.textContent = showCountValue + COMMENTS_UPLOAD_VOLUME;
//   } else {
//     showCount.textContent = socialComment.length - showCountValue + showCountValue;
//     showButton.classList.add('hidden');
//     showCountValue = 0;
//   }
// });
