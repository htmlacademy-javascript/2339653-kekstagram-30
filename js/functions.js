const checkStringLength = (string, maxLengthStr) => string.length <= maxLengthStr;

checkStringLength('проверяемая строка', 10);

const palindromeCheck = (string) => {
  const normalizeString = string.replaceAll(' ', '').toLowerCase();
  let newString = '';

  for (let i = normalizeString.length - 1; i >= 0; i--) {
    newString += normalizeString[i];
  }

  return normalizeString === newString;
};

palindromeCheck('Лёша на полке клопа нашёл ');

const extractNum = (string) => {
  const result = string.toString().replace(/\D/g, '');
  return (parseInt(result, 10));
};

extractNum('1 кефир, 0.5 батона');
