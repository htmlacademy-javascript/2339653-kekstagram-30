import { debounce } from './util.js';
import { createMiniaturesList } from './miniatures';
import { showBigPicture } from './modal-big-picture.js';

const imageFilters = document.querySelector('.img-filters');
const imageFiltersForm = imageFilters.querySelector('.img-filters__form');
const imageFilterButtons = imageFilters.querySelectorAll('.img-filters__button');
const MAX_RANDOM_PHOTO = 10;
const DEBOUNCE_TIME = 500;

const showFilters = () => {
  imageFilters.classList.remove('img-filters--inactive');
};

const getPictureRank = (picture) => {
  const rank = picture.comments.length;
  return rank;
};

const comparPictures = (pictureA, pictureB) => {
  const rankA = getPictureRank(pictureA);
  const rankB = getPictureRank(pictureB);

  return rankB - rankA;
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

// switch currentValue

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


