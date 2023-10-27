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





const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelContauner = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');

// effectLevelValue.value = sliderElement.noUiSlider.get();

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectList.addEventListener('click', (evt) => {
  if (evt.target.checked) {
    effectLevelContauner.classList.remove('hidden');
    fotoPreview.removeAttribute('class');
    fotoPreview.removeAttribute('style');
    effectLevelValue.value = 100;
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);
  }
  if (evt.target.value === 'none') {
    console.log('none');
    effectLevelContauner.classList.add('hidden');
  }
  if (evt.target.value === 'chrome') {
    console.log('haha');
    // fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
  // if (evt.target.value === 'sepia') {
  //   console.log('sepia');
  //   fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

  //   sliderElement.noUiSlider.updateOptions({
  //     range: {
  //       min: 0,
  //       max: 1,
  //     },
  //     start: 1,
  //     step: 0.1,
  //   });
  // }


});


export { sliderElement };
