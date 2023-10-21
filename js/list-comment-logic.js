import { showButton } from './modal-big-picture.js';
import { COMMENTS_UPLOAD_VOLUME} from './modal-big-picture.js';

const logic1 = () => {

  showButton.addEventListener('click', () => {
    const showCount = document.querySelector('.social__comment-shown-count');
    const socialComment = document.querySelectorAll('.social__comment');
    let showCountValue = +showCount.textContent;

    if (showCountValue <= socialComment.length && socialComment.length - showCountValue > COMMENTS_UPLOAD_VOLUME) {
      showCount.textContent = showCountValue + COMMENTS_UPLOAD_VOLUME;
    } else {
      showCount.textContent = socialComment.length - showCountValue + showCountValue;
      showButton.classList.add('hidden');
      showCountValue = 0;
    }
  });
};


const logic2 = () => {


  document.querySelector('.social__comment-shown-count').textContent = COMMENTS_UPLOAD_VOLUME;
  const socialComment = document.querySelectorAll('.social__comment');
  socialComment.forEach((element) => element.classList.add('hidden'));

  if (socialComment.length <= COMMENTS_UPLOAD_VOLUME) {
    showButton.classList.add('hidden');
  }

  let current = 5;

  const proverka = (increment) => {

    for (let i = 0 + increment; i < current && current; i++) {
      if (current > socialComment.length) {
        current = socialComment.length;
      }
      socialComment[i].classList.remove('hidden');

    } current = current + COMMENTS_UPLOAD_VOLUME;
  };
  proverka(0);

  showButton.addEventListener('click', () => {
    const increment = COMMENTS_UPLOAD_VOLUME;
    proverka(increment);
  });
};

export { logic1 };
export { logic2 };
