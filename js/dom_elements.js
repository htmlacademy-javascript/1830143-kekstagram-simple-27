const picturesContainer = document.querySelector('.pictures');
const thumbnailsPicturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imgEditorForm = document.querySelector('.img-upload__form');
const imgEditorElement = document.querySelector('.img-upload__overlay');
const imgEditorOpenElement = document.querySelector('#upload-file');
const imgEditorcloseElement = imgEditorElement.querySelector('#upload-cancel');
const bodyElement = document.querySelector('body');
const commentElement = imgEditorForm.querySelector('.text__description');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const submitButton = document.querySelector('.img-upload__submit');

export {
  picturesContainer, thumbnailsPicturesTemplate,
  imgEditorForm, imgEditorElement, imgEditorOpenElement, imgEditorcloseElement, bodyElement, commentElement,
  scaleControlSmaller, scaleControlBigger, scaleField, image,
  effectLevelValue, effectLevelSlider,
  submitButton
};
