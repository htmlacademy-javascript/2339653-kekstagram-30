const ACADEMY_SERVER = 'https://30.javascript.pages.academy/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getDataFromServer = (createContent, error) => {
  fetch(`${ACADEMY_SERVER}${Route.GET_DATA}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    })
    .then((pictures) => createContent(pictures))
    .catch(() => error());
};

const sendDataForServer = (body, success) => fetch(
  `${ACADEMY_SERVER}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    success();
  });

export { getDataFromServer, sendDataForServer };
