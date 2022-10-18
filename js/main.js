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

const SIMILAR_PUBLICATIONS_COUNT = 25;

const DESCRIPTIONS = [
  'Sed sagittis diam at magna tincidunt, sit amet molestie elit lacinia.',
  'Sed convallis orci eget consequat iaculis.',
  'Maecenas iaculis massa nec erat venenatis lacinia.',
  'Nullam lobortis libero eu varius suscipit.',
  'Vivamus facilisis sapien vel gravida egestas.',
  'Aliquam quis ligula vel purus mollis placerat.',
  'Nulla sed risus eget felis pellentesque tristique a at metus.',
  'Curabitur mollis lectus nec lacus iaculis, id placerat est vulputate.'
];

const createPublication = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: DESCRIPTIONS[randomNumber(0, DESCRIPTIONS.length - 1)],
  likes: randomNumber(15, 200),
  comments: randomNumber(0, 200),
});

const similarPublications = Array.from({length: SIMILAR_PUBLICATIONS_COUNT}, (_, index) => createPublication(index + 1));

// eslint-disable-next-line no-console
console.log(similarPublications);
