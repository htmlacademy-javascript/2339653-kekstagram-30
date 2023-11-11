const fotoPreview = document.querySelector('.img-upload__preview img');
const sizeFotoPreview = document.querySelector('.scale__control--value');
const buttonDecrementSize = document.querySelector('.scale__control--smaller');
const buttomIncrementSize = document.querySelector('.scale__control--bigger');
const MAX_SIZE_VALUE = 100;
const MIN_SIZE_VALUE = 25;
const SIZE_STEP = 25;

const reduceSize = () => {
  if (sizeFotoPreview.value.replace(/\D/g, '') > MIN_SIZE_VALUE) {
    sizeFotoPreview.readonly = false;

    sizeFotoPreview.setAttribute('value', `${sizeFotoPreview.value.replace(/\D/g, '') - SIZE_STEP}%`);
    fotoPreview.style.transform = `scale(${+sizeFotoPreview.value.replace(/\D/g, '') / MAX_SIZE_VALUE})`;
    sizeFotoPreview.setAttribute('value', sizeFotoPreview.value);
  }
};

const increaseSize = () => {
  if (sizeFotoPreview.value.replace(/\D/g, '') < MAX_SIZE_VALUE) {
    sizeFotoPreview.readonly = false;

    sizeFotoPreview.setAttribute('value', `${+sizeFotoPreview.value.replace(/\D/g, '') + SIZE_STEP}%`);
    fotoPreview.style.transform = `scale(${+sizeFotoPreview.value.replace(/\D/g, '') / MAX_SIZE_VALUE})`;
  }
};

buttonDecrementSize.addEventListener('click', reduceSize);
buttomIncrementSize.addEventListener('click', increaseSize);

export { fotoPreview };
export { sizeFotoPreview };
export { MAX_SIZE_VALUE };
