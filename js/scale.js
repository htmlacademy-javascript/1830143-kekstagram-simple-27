const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleField = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const scaleImg = ( value = DEFAULT_SCALE) => {
  image.style.transform = `scale(${value / 100})`;
  scaleField.value = `${value}%`;
};

const onButtonControlSmaller = () => {
  const currentValue = parseInt(scaleField.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (newValue < MIN_SCALE) {
    newValue = MIN_SCALE;
  }
  scaleImg(newValue);
};

const onButtonControlBigger = () => {
  const currentValue = parseInt(scaleField.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (newValue > MAX_SCALE) {
    newValue = MAX_SCALE;
  }
  scaleImg(newValue);
};

scaleControlSmaller.addEventListener('click', onButtonControlSmaller);

scaleControlBigger.addEventListener('click', onButtonControlBigger);

const resetScale = () => {
  scaleImg();
};

export { resetScale };
