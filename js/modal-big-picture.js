
import { createCardPhoto } from './data.js';
import { createArrayPhoto } from './data.js';
import { miniaturesList } from './get-miniatures.js';
import { isEscapeKey } from './util.js';

const modalBigPicture = document.querySelector('.big-picture');
const infoModalBigPicture = document.querySelector('.big-picture__social');
const miniaturePictures = miniaturesList.querySelectorAll('.picture');
const closeModalButton = modalBigPicture.querySelector('.big-picture__cancel');

const openModalBigPicture = () => {
  modalBigPicture.classList.remove('hidden');
  document.querySelector('body').classList.add('modal-open');
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




  });
});

closeModalButton.addEventListener('click', () => {
  closeModalBigPicture();
});

export { miniaturePictures };


const bigPictureCommentsContainer = document.querySelector('.social__comments');
const bigPictureCommentItem = bigPictureCommentsContainer.querySelector('.social__comment')
const listCommentsFragment = document.createDocumentFragment();

const commentElement = bigPictureCommentItem.cloneNode(true);

bigPictureCommentsContainer.innerHTML = '';
commentElement.querySelector('.social__text').textContent = createArrayPhoto[0].comments[0].message;
listCommentsFragment.appendChild(commentElement);
bigPictureCommentsContainer.appendChild(listCommentsFragment);
console.log(listCommentsFragment);

// const bigPictureCommentsContainer = document.querySelector('.social__comments');
// const bigPictureCommentItem = bigPictureCommentsContainer.querySelector('.social__comment')
// const listCommentsFragment = document.createDocumentFragment();


// const commentElement = bigPictureCommentItem.cloneNode(true);
// commentElement.querySelector('.social__text').textContent = createArrayPhoto[0].comments[0].message;
// listCommentsFragment.appendChild(commentElement);
// console.log(listCommentsFragment);


// for (let i = 0; i <= createArrayPhoto.length - 1; i++) {
//   for (let j = 0; j <= createArrayPhoto[i].comments.length; j++) {
//     console.log(createArrayPhoto[i].comments[j]['name']);
//   }
// }

// commentAvatar.src = createArrayPhoto[0].comments[0].avatar;
// commentAvatar.alt = createArrayPhoto[0].comments[0].name;
// comment.querySelector('.comment__text').textContent = createArrayPhoto[0].comments[0].message;
// commentsListBig.appendChild(comment);


// console.log(createArrayPhoto[0].comments);
