const startLogicForCommentShownCount = (button, commentsLengthDefault) => {

  button.addEventListener('click', () => {
    const showCount = document.querySelector('.social__comment-shown-count');
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

  document.querySelector('.social__comment-shown-count').textContent = commentsLength;
  const socialComment = document.querySelectorAll('.social__comment');
  socialComment.forEach((element) => element.classList.add('hidden'));

  if (socialComment.length <= commentsLength) {
    button.classList.add('hidden');
  }

  let currentNumberVisibleComments = commentsLength;

  const checkСommentsLength = (increment) => {

    for (let i = 0 + increment; i < currentNumberVisibleComments && currentNumberVisibleComments; i++) {
      if (currentNumberVisibleComments > socialComment.length) {
        currentNumberVisibleComments = socialComment.length;
      }
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
