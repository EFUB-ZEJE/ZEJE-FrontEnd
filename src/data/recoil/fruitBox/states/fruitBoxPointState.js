import {atom} from 'recoil';

export const fruitBoxPointState = atom({
  key: 'fruitBoxPointState',
  default: 0,
});

export const donatedFruitBoxPointState = atom({
  key: 'donatedFruitBoxPointState',
  default: 0,
});
