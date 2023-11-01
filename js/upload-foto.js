import { errorMessageForPost } from './error-message';
import { checksFormValidation } from './validation-data';
import { closeUploadPictureModal } from './form-modal-window';

const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const INCORRECT_IMAGE_FORMAT = `Не подходящий формат изображения. Используйте  форматы: ${FILE_TYPES.join(', ')}`;

const pictureUploadInput = document.querySelector('.img-upload__input');
const preview = document.querySelector('.img-upload__preview img');

const pictureUpload = () => {
  const file = pictureUploadInput.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (matches) {
    preview.src = URL.createObjectURL(file);
  } else {
    closeUploadPictureModal();
    errorMessageForPost(INCORRECT_IMAGE_FORMAT);
  }
};

export { pictureUpload };
