const ACADEMY_SERVER = 'https://30.javascript.pages.academy/kekstagram/data';

const getDataFromServer = (createContent, error) => {
  fetch(ACADEMY_SERVER)
    .then((response) => response.json())
    .then((pictures) => createContent(pictures))
    .catch(() => error());
};

export { getDataFromServer };
