const ACADEMY_SERVER = 'https://30.javascript.pages.academy/kekstagram/data';

const getDataFromServer = (createContent, error) => {
  fetch(ACADEMY_SERVER)
    .then((response) => response.json())
    .then((pictures) => createContent(pictures))
    .catch(() => error());
};


const sendDataForServer = () => {
  fetch('https://30.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }
    })
    .catch(() => {
      throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
    });
};


export { getDataFromServer, sendDataForServer };
