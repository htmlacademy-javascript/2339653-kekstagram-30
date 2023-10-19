import { miniaturesList } from './get-miniatures.js';

const isEscapeKey = (evt) => evt.key === 'Escape';

const modalBigPicture = document.querySelector('.big-picture');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');

miniaturePictures.forEach(miniaturePicture => {
  miniaturePicture.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalBigPicture.classList.remove('hidden');

    document.addEventListener('keydown', (evt) => {
      if (isEscapeKey(evt)) {
        evt.preventDefault();
        modalBigPicture.classList.add('hidden');
      }
    });
  });
});

closeModalButton.addEventListener('click', () => {
  modalBigPicture.classList.add('hidden');
});


console.log(miniaturePictures[1]);

export { miniaturePictures };
