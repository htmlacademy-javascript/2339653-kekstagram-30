const DESCRIPTIONS = [
  'Безупречная красота.',
  'Бесконечная глубина, повествующая о вечности.',
  'Именно об это думал влюбдённый Шекспир.',
  'После концерта Металлики в Зимбабве.',
  'Непостижимая истина Тибетских буддистов.',
  'Прекрасно далёко, не так уж ты и жестоко...',
  'Где взял, где взял? Заработал.',
  'И я там был, мёд, пиво пил...',
  'Юра прости, мы всё проиграли!',
  'Современный натюрморт по деревенски.',
  'На это желательно не смотреть без соответствующего восприятия и угла зрения.'
];

const NAMES = [
  'Вадик',
  'Водевиль',
  'Хетфилд',
  'Курт',
  'Летов',
  'Даррел',
  'Джимми',
  'Иван Грозный',
  'Пётр 1',
  'Леопольд'
];

const MESSAGES = [
  'Моя бабушка бы сфотографировала гораздо лучше',
  'Ну что могу сказать. Для аватарки в одкоклассники сойдет',
  'Ты, наверное, на тиндере в статусе написал: Если тебе нечего мне сказать кроме "Hello World", то даже не думай мне писать?',
  'Руки-крюки! Шрайбикус из Вас никудышный!!!',
  'Хочешь научиться фотографировать, переходи по ссылке в моём профиле.',
  'Тебе не помешало бы пройти курсы на FotoAcademy.ru',
  'Щёлк, щёлк, щёлк, фоткаешь малыш...',
  'Айфон купил, а фоткать не научился.',
  'О, да Вы Пикассо в мире современного фотоискусства.',
];

const TOTAL_NUMBER_COMMENTS = 30;
const TOTAL_NUMBER_OBJECTS = 25;
const TOTAL_NUMBER_AVATARS = 25;
const MIN_LIKES_AMOUNT = 15;
const MAX_LIKES_AMOUNT = 200;

const getRandomIntegrated = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.ceil(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getUniqueIdElement = (min, max) => {
  const createUniqueIdArray = [];
  return () => {
    let createUnicumCurrentId = getRandomIntegrated(min, max);
    while (createUniqueIdArray.includes(createUnicumCurrentId)) {
      createUnicumCurrentId = getRandomIntegrated(min, max);
    }
    createUniqueIdArray.push(createUnicumCurrentId);
    return createUniqueIdArray;
  };
};

const uniqueIdElements = Array.from({ length: 25 }, getUniqueIdElement(1, TOTAL_NUMBER_OBJECTS));
const uniqueIdComments = Array.from({ length: 30 }, getUniqueIdElement(1, TOTAL_NUMBER_COMMENTS));

const createCommentPhoto = (idPhoto) => ({

  id: uniqueIdComments[1][idPhoto],
  avatar: `img/avatar${getRandomIntegrated(1, TOTAL_NUMBER_AVATARS)}.jpg`,
  message: MESSAGES[getRandomIntegrated(0, MESSAGES.length - 1)],
  name: NAMES[getRandomIntegrated(0, NAMES.length - 1)],
});

const createCardPhoto = (id) => ({

  id: uniqueIdElements[1][id],
  url: `photos/${id + 1}.jpg`,
  description: DESCRIPTIONS[getRandomIntegrated(0, DESCRIPTIONS.length - 1)],
  likes: getRandomIntegrated(MIN_LIKES_AMOUNT, MAX_LIKES_AMOUNT),
  comments: Array.from({ length: TOTAL_NUMBER_COMMENTS }, (_, indexPhoto) => createCommentPhoto(indexPhoto))
});

const createArrayPhoto = Array.from({ length: TOTAL_NUMBER_OBJECTS }, (_, id) => createCardPhoto(id));
