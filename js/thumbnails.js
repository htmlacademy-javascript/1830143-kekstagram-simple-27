import {createPublications} from './data.js';

const picturesContainer = document.querySelector('.pictures');
const thumbnailsPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = () => {
  const thumbnailsPictures = createPublications();
  const sectionFragment = document.createDocumentFragment();

  thumbnailsPictures.forEach(({url, likes, comments}) => {
    const userPicture = thumbnailsPicturesTemplate.cloneNode(true);
    userPicture.querySelector('.picture__img').src = url;
    userPicture.querySelector('.picture__likes').textContent = likes;
    userPicture.querySelector('.picture__comments').textContent = comments;
    sectionFragment.appendChild(userPicture);
  });

  picturesContainer.appendChild(sectionFragment);
};

export {renderThumbnails};
