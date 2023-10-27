const sliderElement = document.querySelector('.effect-level__slider');
const fotoPreview = document.querySelector('.img-upload__preview img');
const sizeFotoPreviev = document.querySelector('.scale__control--value');
const buttonDecrementSize = document.querySelector('.scale__control--smaller');
const buttomIncrementSize = document.querySelector('.scale__control--bigger');

const MAX_SIZE_VALUE = 100;
const MIN_SIZE_VALUE = 25;
const SIZE_STEP = 25;


const reducesSize = () => {
  if (sizeFotoPreviev.value.replace(/\D/g, '') > MIN_SIZE_VALUE) {
    sizeFotoPreviev.value = `${sizeFotoPreviev.value.replace(/\D/g, '') - SIZE_STEP}%`;
    fotoPreview.style.transform = `scale(${+sizeFotoPreviev.value.replace(/\D/g, '') / 100})`;
  }
};

const increasesSize = () => {
  if (sizeFotoPreviev.value.replace(/\D/g, '') < MAX_SIZE_VALUE) {
    sizeFotoPreviev.value = `${+sizeFotoPreviev.value.replace(/\D/g, '') + SIZE_STEP}%`;
    fotoPreview.style.transform = `scale(${+sizeFotoPreviev.value.replace(/\D/g, '') / 100})`;
  }
};

buttonDecrementSize.addEventListener('click', (reducesSize));
buttomIncrementSize.addEventListener('click', (increasesSize));


noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});


export { sliderElement };
