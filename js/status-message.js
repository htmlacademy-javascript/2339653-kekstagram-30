import { isEscapeKey } from './util';
import { clearFieldsUploadPictureModal } from './form-modal-window';

const errorMessageGetTemplate = document.querySelector('#data-error').content;
const successMessageTemplate = document.querySelector('#success').content;
const errorMessagePostTemplate = document.querySelector('#error').content;

const ALERT_SHOW_TIME = 5000;

const showErrorMessageForGet = () => {
  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessageGetTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  setTimeout(() => {
    document.querySelector('.data-error').remove();
  }, ALERT_SHOW_TIME);
};

const showSuccessMessage = () => {
  const createSuccessMessage = document.createDocumentFragment();
  const successMessage = successMessageTemplate.cloneNode(true);
  createSuccessMessage.appendChild(successMessage);
  document.body.appendChild(createSuccessMessage);

  const buttonCloseSuccess = document.querySelector('.success__button');
  const overlayForSuccess = document.querySelector('.success');
  const successContainer = document.querySelector('.success__inner');

  const onCloseFromKeyboardForSuccessMessage = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeSuccessWindowHandler();
    }
  };

  document.addEventListener('keydown', onCloseFromKeyboardForSuccessMessage);

  function closeSuccessWindowHandler() {
    clearFieldsUploadPictureModal();
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onCloseFromKeyboardForSuccessMessage);
  }

  buttonCloseSuccess.addEventListener('click', closeSuccessWindowHandler);
  overlayForSuccess.addEventListener('click', closeSuccessWindowHandler);
  successContainer.addEventListener('click', (evt) => evt.stopPropagation());
};

const showErrorMessageForPost = () => {

  const createErrorMessage = document.createDocumentFragment();
  const errorMessage = errorMessagePostTemplate.cloneNode(true);
  createErrorMessage.appendChild(errorMessage);
  document.body.appendChild(createErrorMessage);

  const buttonCloseError = document.querySelector('.error__button');
  const overlayForError = document.querySelector('.error');
  const errorContainer = document.querySelector('.error__inner');

  const onCloseFromKeyboardForErrorMessage = (evt) => {
    if (isEscapeKey(evt)) {
      evt.preventDefault();
      closeErrorWindowHandler();
    }
  };

  document.addEventListener('keydown', onCloseFromKeyboardForErrorMessage);

  function closeErrorWindowHandler() {
    document.querySelector('.error').remove();
    document.removeEventListener('keydown', onCloseFromKeyboardForErrorMessage);
  }

  buttonCloseError.addEventListener('click', closeErrorWindowHandler);
  overlayForError.addEventListener('click', closeErrorWindowHandler);
  errorContainer.addEventListener('click', (evt) => evt.stopPropagation());
};

export { showSuccessMessage };
export { showErrorMessageForGet };
export { showErrorMessageForPost };
