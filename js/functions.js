/*      1      */
{
  const checksLenghtStr = (string, maxLengthStr) => string.length <= maxLengthStr;

  checksLenghtStr('проверяемая строка', 10);
}

/*      2      */
{
  const polydromeCheck = function (string) {
    const normalizeString = string.replaceAll(' ', '').toLowerCase();
    let newString = '';

    for (let i = normalizeString.length - 1; i >= 0; i--) {
      newString += normalizeString[i];
    }

    return normalizeString === newString;
  };
  polydromeCheck('Лёша на полке клопа нашёл ');
}

/*      3      */
{
  const extractNum = function (string) {
    const valum = string.toString().replace(/\D/g, '');
    return (parseInt(valum, 10));
  };

  extractNum('1 кефир, 0.5 батона');
}

