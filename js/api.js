import { showFilters } from './image-display-filter.js';
import { showErrorMessageForGet } from './status-message.js';
import { showSuccessMessage } from './status-message.js';

const ACADEMY_SERVER = 'https://30.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getDataFromServer = (cb) => {
  fetch(`${ACADEMY_SERVER}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((pictures) => {
      cb(pictures);
      showFilters();
    })
    .catch(() => showErrorMessageForGet());
};

const sendDataForServer = (body) => fetch(
  `${ACADEMY_SERVER}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    showSuccessMessage();

  });

export { getDataFromServer, sendDataForServer };
