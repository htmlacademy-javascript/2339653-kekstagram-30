import { createMiniaturesList } from './miniatures';
import { showBigPicture } from './modal-big-picture.js';
import { comparPictures, debounce } from './util.js';

const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = imageFilters.querySelector('.img-filters__form');
const imageFilterButtons = imageFilters.querySelectorAll('.img-filters__button');
const MAX_RANDOM_PHOTO = 10;
const DEBOUNCE_TIME = 500;

const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};

const filterItems = (photos, filter) => {
  if (filter.id.endsWith('default')) {
    createMiniaturesList(photos);
    showBigPicture(photos);
  }
  if (filter.id.endsWith('random')) {
    photos.sort(() => Math.random() - 0.5);
    createMiniaturesList(photos.slice(0, MAX_RANDOM_PHOTO));
    showBigPicture(photos);
  }
  if (filter.id.endsWith('discussed')) {
    photos.sort(comparPictures);
    createMiniaturesList(photos);
    showBigPicture(photos);
  }
};

const setFilterHandlers = (photos) => {
  const filterHandler = debounce(filterItems, DEBOUNCE_TIME);

  imageFilterButtons.forEach((filterBtn) => {
    filterBtn.addEventListener('click', () => {
      filterHandler.call(this, photos.slice(), filterBtn);
    });
  });

  imageFiltersForm.addEventListener('click', (evt) => {
    imageFilterButtons.forEach((filterBtn) => {
      filterBtn.classList.remove('img-filters__button--active');
    });
    evt.target.classList.add('img-filters__button--active');
  });
};

export { showFilters };
export { setFilterHandlers };


