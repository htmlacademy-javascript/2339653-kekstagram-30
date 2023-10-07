
// 1
{
  const checksLenghtStr = (string, maxLengthStr) => string.length <= maxLengthStr;

  console.log(checksLenghtStr('проверяемая строка', 10));
}

// 2
{
  const polydromeCheck = function(string) {
    const normalizeString = string.replaceAll(' ', '').toLowerCase();
    let newString = '';

    for (let i = normalizeString.length - 1; i >= 0; i--) {
      newString += normalizeString[i];
    }

    return normalizeString === newString ? console.log(true) : console.log(false);
  };
  polydromeCheck('Лёша на полке клопа нашёл ');
}

