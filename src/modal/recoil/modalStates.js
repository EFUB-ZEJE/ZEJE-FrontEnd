import {atom} from 'recoil';

const generateModalAtomOption = key => ({key, default: false});

export const orangeRedModalState = atom(
  generateModalAtomOption('OrangeRedModal'),
);
