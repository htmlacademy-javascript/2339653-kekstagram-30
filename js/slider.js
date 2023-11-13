import { fotoPreview } from './changing-picture-size';
import { sizeFotoPreview } from './changing-picture-size';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelContauner = document.querySelector('.effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const effectRadioButtons = effectList.querySelectorAll('.effects__radio');

const START_EFFECT_VALUE = 100;
const CURRENT_EFFECT = {
  effect: '',
  unit: '',
};

effectLevelContauner.classList.add('hidden');

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

const setEffectValue = () => {
  effectLevelValue.value = sliderElement.noUiSlider.get();
  effectLevelValue.setAttribute('value', sliderElement.noUiSlider.get());
  effectLevelValue.readonly = effectLevelValue.value;
  fotoPreview.style.filter = `${CURRENT_EFFECT.effect}(${effectLevelValue.value}${CURRENT_EFFECT.unit})`;
};

const removeCheckedsRadioHandler = () => {
  effectRadioButtons.forEach((effectRadioButton) => {
    effectRadioButton.removeAttribute('checked');
  });
};

effectList.addEventListener('click', (evt) => {
  removeCheckedsRadioHandler();
  evt.target.setAttribute('checked', '');

  if (evt.target.checked) {
    effectLevelContauner.classList.remove('hidden');
    fotoPreview.removeAttribute('class');
    fotoPreview.removeAttribute('style');
    effectLevelValue.value = START_EFFECT_VALUE;
    fotoPreview.style.transform = `scale(${+sizeFotoPreview.value.replace(/\D/g, '') / START_EFFECT_VALUE})`;

    fotoPreview.classList.add(`effects__preview--${evt.target.value}`);
  }
  if (evt.target.value === 'none') {
    CURRENT_EFFECT.effect = '';
    CURRENT_EFFECT.unit = '';
    effectLevelContauner.classList.add('hidden');
    effectLevelValue.setAttribute('value', '');
  }
  if (evt.target.value === 'chrome') {
    CURRENT_EFFECT.effect = 'grayscale';
    CURRENT_EFFECT.unit = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
  if (evt.target.value === 'sepia') {
    CURRENT_EFFECT.effect = 'sepia';
    CURRENT_EFFECT.unit = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    });
  }
  if (evt.target.value === 'marvin') {
    CURRENT_EFFECT.effect = 'invert';
    CURRENT_EFFECT.unit = '%';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    });
  }
  if (evt.target.value === 'phobos') {
    CURRENT_EFFECT.effect = 'blur';
    CURRENT_EFFECT.unit = 'px';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
  if (evt.target.value === 'heat') {
    CURRENT_EFFECT.effect = 'brightness';
    CURRENT_EFFECT.unit = '';
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    });
  }
});

sliderElement.noUiSlider.on('update', setEffectValue);


export { effectLevelContauner };
export { effectLevelValue };
export { sliderElement };
export { effectRadioButtons, removeCheckedsRadioHandler };
