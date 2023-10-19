import { createArrayPhoto } from './data.js';
import { miniaturesList } from './get-miniatures.js';
import { isEscapeKey } from './util.js';

const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');

miniaturePictures.forEach(miniaturePicture => {
  miniaturePicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalBigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');

    modalBigPicture.querySelector('img').src = miniaturePicture.querySelector('.picture__img').src;
    infoModalBigPicture.querySelector('.likes-count').textContent = miniaturePicture.querySelector('.picture__likes').textContent;
    infoModalBigPicture.querySelector('.social__caption').textContent = miniaturePicture.querySelector('.picture__img').alt;
    // infoModalBigPicture.querySelector('.social__comment-total-count').textContent = createArrayPhoto.comments.length;

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        modalBigPicture.classList.add('hidden');
        document.querySelector('body').classList.remove('modal-open');
      }
    });
  });
});


closeModalButton.addEventListener('click', () => {
  modalBigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
});


// console.log(document.querySelector('.picture__comments'));

// const coms = miniaturesList.forEach((index) => {
//   console.log(index.comments.length);
// });

console.log(miniaturesList);

// let dfdf = infoModalBigPicture.querySelector('.social__comment-total-count').textContent = comms[0];
// console.log(dfdf);



export { miniaturePictures };
