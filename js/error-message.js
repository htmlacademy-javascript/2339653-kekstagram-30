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
