import { errorMessageForPost } from './status-message';
import { closeUploadPictureModal } from './form-modal-window';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const INCORRECT_IMAGE_FORMAT = `Ошибка. Используйте  форматы: ${FILE_TYPES.join(', ')}`;

const pictureUploadInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');
const effectPreview = document.querySelectorAll('.effects__preview ');

const pictureUpload = () => {
  const file = pictureUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
    effectPreview.forEach((element) => {
      element.style.backgroundImage = `url(${preview.src})`;
    });

  } else {
    closeUploadPictureModal();
    errorMessageForPost();
    document.querySelector('.error__title').textContent = INCORRECT_IMAGE_FORMAT;
  }
};

export { pictureUpload };
