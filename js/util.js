const checkStringLength = (string, maxLength) => string.length <= maxLength;

const getRandomIntegrated = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.ceil(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getUniqueIdElement = (min, max) => {
  const createUniqueIdArray = [];
  return () => {
    let createUnicumCurrentId = getRandomIntegrated(min, max);
    while (createUniqueIdArray.includes(createUnicumCurrentId)) {
      createUnicumCurrentId = getRandomIntegrated(min, max);
    }
    createUniqueIdArray.push(createUnicumCurrentId);
    return createUniqueIdArray;
  };
};

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
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      callback();
    }
  }, { once: true });
};

const isRepeatElement = (array) => array.length !== new Set(array).size;

export { checkStringLength };
export { getRandomIntegrated };
export { getUniqueIdElement };
export { isEscapeKey };
export { stopIsEscapeKey };
export { onModalEscapeKeydown };
export { isRepeatElement };
