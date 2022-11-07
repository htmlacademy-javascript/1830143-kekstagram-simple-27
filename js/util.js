const getRandomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return NaN;
  }
  const max = Math.floor(Math.max(from, to));
  const min = Math.ceil(Math.min(from, to));

  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

const checkStringLength = (string, maxLength) =>
  string.length <= maxLength;

export {getRandomArrayElement, getRandomNumber, checkStringLength};
