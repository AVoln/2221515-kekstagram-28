//проверка длины строки
const isValidLength = (string, length) => string.length >= length;

isValidLength('Привет, как дела?', 20);

//проверка на палиндром

const isPalindrome = (stroke) => {
  const normalizedStroke = `${stroke}`.split(' ').join('').toLowerCase();

  return normalizedStroke.split('').reverse().join('') === normalizedStroke;
};

isPalindrome('Лёша на полке клопа нашёл');

//извлечение чисел из строки

const getNumber = (value) => {
  const array = value.toString().split('');

  const numbers = array.filter((item) => {
    const number = parseInt(item, 10);

    return Number.isInteger(number);
  });

  return numbers.join('');
};

getNumber('-ыыы 12333333333333wwwas 333355 3123');

// //формирование адресов файлов(добивка)

const fillStartString = ({ startStroke, minLength, additionalStroke }) => {
  const startArray = `${startStroke}`.split('');
  const additionalArray = `${additionalStroke}`.split('');

  if (startArray.length >= minLength) {
    return startStroke;
  }

  if (startArray.length < minLength) {
    let result = [...startArray];

    while (result.length < minLength) {
      const delta = minLength - result.length;
      if (additionalStroke.length <= delta) {
        result = [...additionalArray, ...result];
      } else {
        additionalArray.length = delta;
        result = [...additionalArray, ...result];
      }
    }
    return result.join('');
  }
};

fillStartString({ startStroke: 'q', minLength: 3, additionalStroke: 'we' });

