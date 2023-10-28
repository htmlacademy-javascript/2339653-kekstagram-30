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

