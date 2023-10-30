import { createMiniaturesList } from './miniatures';
import { getPictures } from './modal-big-picture';

const ACADEMY_SERVER = 'https://30.javascript.pages.academy/kekstagram/data';


fetch(ACADEMY_SERVER)
  .then((response) => response.json())
  .then((pictures) => getPictures(pictures))
  .catch((err) => console.log(err));


