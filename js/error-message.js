import { onModalEscapeKeydown } from './util';
import { clearsFieldsUploadPictureModal } from './form-modal-window';

const errorMessageTemplate = document.querySelector('#data-error').content;
const ALERT_SHOW_TIME = 5000;

const errorMessages = () => {
  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessageTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};

export { errorMessages };


const successMessageTemplate = document.querySelector('#success').content;

const successMessages = () => {
  const createSuccessMessage = document.createDocumentFragment();
  const successMessage = successMessageTemplate.cloneNode(true);
  createSuccessMessage.appendChild(successMessage);
  document.body.appendChild(createSuccessMessage);

  const buttonCloseSuccess = document.querySelector('.success__button');
  const overlayForSuccess = document.querySelector('.success');
  const successContainer = document.querySelector('.success__inner');

  const closeSuccessWindow = () => {
    document.querySelector('.success').remove();
    clearsFieldsUploadPictureModal();
  };

  overlayForSuccess.addEventListener('click', (closeSuccessWindow));
  successContainer.addEventListener('click', (evt) => {
    evt.stopPropagation();
  });
  buttonCloseSuccess.addEventListener('click', (closeSuccessWindow));
  onModalEscapeKeydown(closeSuccessWindow);
};



export { successMessages };
