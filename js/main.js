const randomNumber = (from, to) => {
  if (from < 0 || to < 0) {
    return NaN;
  }

  return Math.floor((Math.min(from, to) + Math.random() * (Math.max(from, to) - Math.min(from, to) + 1)));
};

randomNumber (1, 10);

const checkStringLength = (checkedString, maxLength) =>
  checkedString.length <= maxLength;

checkStringLength ('комментарий', 140);
