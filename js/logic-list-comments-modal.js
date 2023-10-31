const showCount = document.querySelector('.social__comment-shown-count');

const startLogicForCommentShownCount = (button, commentsLengthDefault) => {

  button.addEventListener('click', () => {

    const socialComment = document.querySelectorAll('.social__comment');
    let showCountValue = +showCount.textContent;

    if (showCountValue <= socialComment.length && socialComment.length - showCountValue > commentsLengthDefault) {
      showCount.textContent = showCountValue + commentsLengthDefault;
    } else {
      showCount.textContent = socialComment.length - showCountValue + showCountValue;
      button.classList.add('hidden');
      showCountValue = 0;
    }
  });
};

const startLogicForUploadAdditionalComments = (button, commentsLength) => {

  showCount.textContent = commentsLength;
  const socialComment = document.querySelectorAll('.social__comment');
  socialComment.forEach((element) => element.classList.add('hidden'));

  if (socialComment.length <= commentsLength) {
    button.classList.add('hidden');
  }

  let currentNumberVisibleComments = commentsLength;

  const checkСommentsLength = (increment) => {
    if (currentNumberVisibleComments > socialComment.length) {
      currentNumberVisibleComments = socialComment.length;
    }
    for (let i = 0 + increment; i < currentNumberVisibleComments; i++) {
      socialComment[i].classList.remove('hidden');
    }
    currentNumberVisibleComments = currentNumberVisibleComments + commentsLength;
  };

  checkСommentsLength(0);

  button.addEventListener('click', () => {
    const increment = commentsLength;
    checkСommentsLength(increment);
  });
};

export { startLogicForCommentShownCount };
export { startLogicForUploadAdditionalComments };
