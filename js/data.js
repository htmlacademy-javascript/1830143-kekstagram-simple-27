import { getRandomArrayElement, getRandomNumber } from './util.js';

const SIMILAR_PUBLICATIONS_COUNT = 25;
const LIKES_COUNT_FROM = 15;
const LIKES_COUNT_TO = 200;
const COMMENTS_COUNT_FROM = 0;
const COMMENTS_COUNT_TO = 200;
const EMPTY_VALUE = '';

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
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(LIKES_COUNT_FROM, LIKES_COUNT_TO),
  comments: getRandomNumber(COMMENTS_COUNT_FROM, COMMENTS_COUNT_TO),
});

const createPublications = () => Array.from({length: SIMILAR_PUBLICATIONS_COUNT}, (_, index) => createPublication(index + 1));

export { createPublications, EMPTY_VALUE };
