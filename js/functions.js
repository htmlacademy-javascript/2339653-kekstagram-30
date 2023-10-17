const MINUTES_IN_HOUR = 60;

const getMinutes = function (string) {
  const getArrayNumbers = string.split(':', 2);
  const getMinutesFromHours = parseInt(getArrayNumbers[0], 10) * MINUTES_IN_HOUR;
  const minutes = getMinutesFromHours + parseInt(getArrayNumbers[1], 10);

  return minutes;
};

const checkMeetingForWorkingDay = (beginDay, endDay, beginMeetig, durationMeeting) => {

  const begin = getMinutes(beginDay);
  const end = getMinutes(endDay);
  const start = getMinutes(beginMeetig);

  return ((start + durationMeeting) <= end && start >= begin);
};

/* Прошу посмотреть беглым глазом закомментированный снизу код.*/
/* Сперва меня почему то понесло в сложности... Так и не вышло. Но очень интересно возможно ли.*/
/* Комментарии обязательно удалю */

// const getDate = function (string) {
//   const getArrayNumbers = string.split(':', 2);
//   const getHours = parseInt(getArrayNumbers[0], 10);
//   const getMinutes = parseInt(getArrayNumbers[1], 10);

//   return new Date().setHours(getHours, getMinutes, 0);
// };

// const generatorHoursFromMinutes = function (numbers) {
//   let sum = 0;
//   numbers.forEach((value) => {
//     sum += value;
//   });
//   return sum;
// };

// const getDurationTime = function (mins) {
//   const arrayHours = [];
//   const arrayMinutes = [];

//   while (mins) {
//     if (mins >= 60) {
//       mins -= 60;
//       arrayHours.push(60);

//     } else if (mins < 60) {
//       arrayMinutes.push(mins);
//       break;
//     }
//   }

//   return new Date().setHours(generatorHoursFromMinutes(arrayHours), generatorHoursFromMinutes(arrayMinutes), 0);
// };

// const checkMeetingForWorkingDay = (beginDay, endDay, beginMeetig, durationMeeting) => {
//   const begin = getDate(beginDay);
//   const end = getDate(endDay);
//   const start = getDate(beginMeetig);
//   const duration = getDurationTime(durationMeeting);

//   if ((start + duration) < end) {
//     return false;
//   } else {
//     return true;
//   }
// };


