import { effectLevel, effectLevelSlider, effectLevelValue, imgEditorForm, image } from './dom_elements.js';

const EFFECTS = [
  { name: 'none', min: 0, max: 100, step: 1 },
  { name: 'chrome', style: 'grayscale', min: 0, max: 1, step: 0.1, units: '' },
  { name: 'sepia', style: 'sepia', min: 0, max: 1, step: 0.1, units: '' },
  { name: 'marvin', style: 'invert', min: 0, max: 100, step: 1, units: '%' },
  { name: 'phobos', style: 'blur', min: 0, max: 3, step: 0.1, units: 'px' },
  { name: 'heat', style: 'brightness', min: 0, max: 3, step: 0.1, units: '' },
];

const DEFAULT_EFFECT = EFFECTS[0];
let currentEffect = DEFAULT_EFFECT;

const isDefaultEffect = () => currentEffect === DEFAULT_EFFECT;

const updateEffect = () => {
  effectLevel.classList.remove('hidden');
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  if (isDefaultEffect()) {
    effectLevel.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  currentEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  updateEffect();
};

const onEffectUpdate = () => {
  image.style.willChange = 'filter';
  image.style.filter = 'none';
  image.className = '';
  effectLevelValue.value = '';
  if(isDefaultEffect()) {
    return;
  }
  const effectValue = effectLevelSlider.noUiSlider.get();
  image.style.filter = `${currentEffect.style}(${effectValue}${currentEffect.units})`;
  image.classList.add(`effects__preview--${currentEffect.name}`);
  effectLevelValue.value = effectValue;
};

const resetEffect = () => {
  currentEffect = DEFAULT_EFFECT;
  updateEffect();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
});
updateEffect();

imgEditorForm.addEventListener('change', onFormChange);
effectLevelSlider.noUiSlider.on('update', onEffectUpdate);

export { resetEffect };
