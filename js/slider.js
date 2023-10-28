import { fotoPreview } from './changing-picture-size';
import { sizeFotoPreviev } from './changing-picture-size';

const START_EFFECT_VALUE = 100;
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelContauner = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

effectList.addEventListener('change', (evt) => {
  if (evt.target.checked) {
    effectLevelContauner.classList.remove('hidden');
    fotoPreview.removeAttribute('class');
    fotoPreview.removeAttribute('style');
    effectLevelValue.value = START_EFFECT_VALUE;
    sizeFotoPreviev.value = `${START_EFFECT_VALUE}%`;
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);
  }
  if (evt.target.value === 'none') {
    effectLevelContauner.classList.add('hidden');

  }
  if (evt.target.value === 'chrome') {
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });

    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      fotoPreview.style.filter = `grayscale(${effectLevelValue.value})`;
    });
  }

  if (evt.target.value === 'sepia') {
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });

    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      fotoPreview.style.filter = `sepia(${effectLevelValue.value})`;
    });
  }

  if (evt.target.value === 'marvin') {
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });

    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      fotoPreview.style.filter = `blur(${effectLevelValue.value}px)`;
    });
  }

  if (evt.target.value === 'phobos') {
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });

    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      fotoPreview.style.filter = `blur(${effectLevelValue.value}px)`;
    });
  }

  if (evt.target.value === 'heat') {
    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });

    sliderElement.noUiSlider.on('update', () => {
      effectLevelValue.value = sliderElement.noUiSlider.get();
      fotoPreview.style.filter = `brightness(${effectLevelValue.value})`;
    });
  }
});


export { sliderElement };
