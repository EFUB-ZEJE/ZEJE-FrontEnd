import {atom} from 'recoil';

const generateModalAtomOption = key => ({key, default: false});

export const orangeGoldModalState = atom(
  generateModalAtomOption('orangeGoldModalState'),
);
export const orangeGreenModalState = atom(
  generateModalAtomOption('orangeGreenModalState'),
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

export const deleteDiaryFolderModalState = atom(
  generateModalAtomOption('deleteDiaryFolderModalState'),
);

export const deleteDiaryModalState = atom(
  generateModalAtomOption('deleteDiaryModalState'),
);

export const letterModalState = atom(
  generateModalAtomOption('letterModalState'),
);
export const basketModalState = atom(
  generateModalAtomOption('basketModalState'),
);

export const checkDeleteAllTasksModalState = atom(
  generateModalAtomOption('checkDeleteAllTasksModalState'),
);
export const exceedMaximumListModalState = atom(
  generateModalAtomOption('exceedMaximumListModalState'),
);
export const addSuccessModalState = atom(
  generateModalAtomOption('addSuccessModalState'),
);

export const donationDialogModalState = atom(
  generateModalAtomOption('donationDialogModalState'),
);

export const logoutModalState = atom(
  generateModalAtomOption('logoutModalState'),
);
