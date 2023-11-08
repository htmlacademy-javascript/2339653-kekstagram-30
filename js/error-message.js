import { onModalEscapeKeydown, isEscapeKey } from './util';
import { clearsFieldsUploadPictureModal } from './form-modal-window';

const errorMessageGetTemplate = document.querySelector('#data-error').content;
const successMessageTemplate = document.querySelector('#success').content;
const errorMessagePostTemplate = document.querySelector('#error').content;
const ALERT_SHOW_TIME = 5000;

const errorMessagesForGet = () => {
  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessageGetTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};

const successMessages = () => {
  const createSuccessMessage = document.createDocumentFragment();
  const successMessage = successMessageTemplate.cloneNode(true);
  createSuccessMessage.appendChild(successMessage);
  document.body.appendChild(createSuccessMessage);

  const buttonCloseSuccess = document.querySelector('.success__button');
  const overlayForSuccess = document.querySelector('.success');
  const successContainer = document.querySelector('.success__inner');

  const closeSuccessWindow = () => {
    clearsFieldsUploadPictureModal();
    document.querySelector('.success').remove();
  };

  onModalEscapeKeydown(closeSuccessWindow);
  buttonCloseSuccess.addEventListener('click', (closeSuccessWindow));
  overlayForSuccess.addEventListener('click', (closeSuccessWindow));
  successContainer.addEventListener('click', (evt) => evt.stopPropagation());
};

const errorMessageForPost = () => {

  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessagePostTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  const buttonCloseError = document.querySelector('.error__button');
  const overlayForError = document.querySelector('.error');
  const errorContainer = document.querySelector('.error__inner');

  const closeErrorWindow = () => {
    document.querySelector('.error').remove();
  };

  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorWindow();
    }
  }, { once: true });

  buttonCloseError.addEventListener('click', (closeErrorWindow));
  overlayForError.addEventListener('click', (closeErrorWindow));
  errorContainer.addEventListener('click', (evt) => evt.stopPropagation());
};

export { successMessages };
export { errorMessagesForGet };
export { errorMessageForPost };
