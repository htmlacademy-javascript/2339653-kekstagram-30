const sliderElement = document.querySelector('.effect-level__slider');
const fotoPreview = document.querySelector('.upload__preview');
let sizeFotoPreviev = document.querySelector('.scale__control--value');
const buttomMinusSize = document.querySelector('.scale__control--smaller');
const buttomPlusSize = document.querySelector('.scale__control--bigger');



buttomMinusSize.addEventListener('click', () => {
  let currentSizefoto = sizeFotoPreviev.value;
  console.log(sizeFotoPreviev.value);

  currentSizefoto = currentSizefoto.replace(/\D/g, '') - 25;
  // console.log(currentSizefoto.replace(/\D/g, '') - 25);
  console.log(currentSizefoto + '%');
  sizeFotoPreviev.value = currentSizefoto + '%';
  console.log(sizeFotoPreviev.value);
});






noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
});


export { sliderElement };
