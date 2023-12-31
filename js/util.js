const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

const onStopIsEscapeKey = (element) => {
  element.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.stopPropagation();
    }
  });
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
export { onStopIsEscapeKey };
export { isRepeatElement };
export { comparePictures };
export { debounce };
