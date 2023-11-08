import { errorMessageForPost } from './status-message.js';
import { isRepeatElement } from './util.js';
import { checkStringLength } from './util.js';
import { sendDataForServer } from './api.js';

const formUploadFoto = document.querySelector('.img-upload__form');
const hashtagInput = document.querySelector('.text__hashtags');
const commentsInput = document.querySelector('.text__description');
const submitButton = document.querySelector('.img-upload__submit');
const HASH_TAG_PATTERN = /^#[a-zа-яё0-9]{1,19}$/i;
const MAX_HASHTAG_AMOUNT = 5;
const MAX_LENGTH_COMMENT = 140;

const pristine = new Pristine(formUploadFoto, {
  classTo: 'form-group',
  errorTextTag: 'div',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const checksFormValidation = (onSuccess) => {
  formUploadFoto.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      // TODO: заглушил и не удалил к-логи, так как пока они нужны для проверок
      // eslint-disable-next-line no-console
      console.log('можно отправлять');
      submitButton.disabled = true;

      sendDataForServer(new FormData(evt.target))
        .then(onSuccess)
        .catch(() => {
          errorMessageForPost();
        })
        .finally(() => {
          submitButton.disabled = false;
        });
    } else {
      // TODO: заглушил и не удалил к-логи, так как пока они нужны для проверок
      // eslint-disable-next-line no-console
      console.log('нельзя отправлять');
    }
  });
};

pristine.addValidator(hashtagInput, () => {
  const hashtagArray = hashtagInput.value.toLowerCase().replace(/ +/g, ' ').trim().split(' ');

  if (hashtagArray[0] === '') {
    return true;
  }
  return hashtagArray.every((hashtag) => HASH_TAG_PATTERN.test(hashtag));
}, 'Хэштеги не валидны', 1, true
);

pristine.addValidator(hashtagInput, () => {
  const hashtagArray = hashtagInput.value.toLowerCase().replace(/ +/g, ' ').trim().split(' ');

  if (!isRepeatElement(hashtagArray)) {
    return true;
  }
}, 'Хэштеги не должны повторятся', 1, true
);

pristine.addValidator(hashtagInput, () => {
  const hashtagArray = hashtagInput.value.toLowerCase().replace(/ +/g, ' ').trim().split(' ');

  if (hashtagArray.length <= MAX_HASHTAG_AMOUNT) {
    return true;
  }
}, 'Превышено максимальное колиичество хэштегов равное 5', 1, true
);

pristine.addValidator(commentsInput, (value) => checkStringLength(value, MAX_LENGTH_COMMENT),
  `Текст комментария должен содержать не более ${MAX_LENGTH_COMMENT} символов`,
  1, false
);

export { hashtagInput, commentsInput };
export { pristine, checksFormValidation };
export { sendDataForServer };


