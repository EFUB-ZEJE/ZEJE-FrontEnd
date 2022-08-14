import {atom} from 'recoil';

const generateModalAtomOption = key => ({key, default: false});

export const orangeGoldModalState = atom(
  generateModalAtomOption('OrangeGoldModalState'),
);
export const orangeGreenModalState = atom(
  generateModalAtomOption('OrangeGreenModalState'),
);
export const orangeMandarinModalState = atom(
  generateModalAtomOption('orangeMandarinModalState'),
);
export const orangeMtModalState = atom(
  generateModalAtomOption('orangeMtModalState'),
);
export const orangeRedModalState = atom(
  generateModalAtomOption('OrangeRedModalState'),
);
export const orangeSourModalState = atom(
  generateModalAtomOption('orangeSourModalState'),
);
export const orangeThousandModalState = atom(
  generateModalAtomOption('orangeThousandModalState'),
);
export const orangeTinyModalState = atom(
  generateModalAtomOption('orangeTinyModalState'),
);
export const letterModalState = atom(
  generateModalAtomOption('letterModalState'),
);
export const basketModalState = atom(
  generateModalAtomOption('basketModalState'),
);
