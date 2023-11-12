const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const stopIsEscapeKey = (element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
};


const onModalEscapeKeydown = (callback) => {
  document.addEventListener('keydown', (evt) => {
    if (document.querySelectorAll('.error__inner').length > 0) {
      return;
    }
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      callback();
    }
  } /*, { once: true }*/);
};

const isRepeatElement = (array) => array.length !== new Set(array).size;

const getPictureRank = (picture) => {
  const rank = picture.comments.length;
  return rank;
};

const comparePictures = (pictureA, pictureB) => {
  const rankA = getPictureRank(pictureA);
  const rankB = getPictureRank(pictureB);
  return rankB - rankA;
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export { checkStringLength };
export { isEscapeKey };
export { stopIsEscapeKey };
export { onModalEscapeKeydown };
export { isRepeatElement };
export { comparePictures };
export { debounce };

