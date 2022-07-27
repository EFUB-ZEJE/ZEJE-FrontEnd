import {atom} from 'recoil';

const generateModalAtomOption = key => ({key, default: false});

export const orangeInfoModalState = atom(
  generateModalAtomOption('OrangeInfoModal'),
);
