import {atom} from 'recoil';
// 유저가 보고 있는 지역

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

export const ArriveSpotModalState = atom(
  generateModalAtomOption('ArriveSpotModalState'),
);

export const DistanceToSpotModalState = atom(
  generateModalAtomOption('DistanceToSpotModalState'),
);

export const GetAllFlowersModalState = atom(
  generateModalAtomOption('GetAllFlowersModalState'),
);

export const GetPossibleFlowersModalState = atom(
  generateModalAtomOption('GetPossibleFlowersModalState'),
);

export const NotFoundModalState = atom(
  generateModalAtomOption('NotFoundModalState'),
);

export const FoundModalState = atom(generateModalAtomOption('FoundModalState'));

export const PlaceDetailModalState = atom(
  generateModalAtomOption('PlaceDetailModalState'),
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

export const unRegisterCheckModalState = atom(
  generateModalAtomOption('unRegisterCheckModalState'),
);

export const unRegisterDoneModalState = atom(
  generateModalAtomOption('unRegisterDoneModalState'),
);

export const toSNotCheckedState = atom(
  generateModalAtomOption('toSNotCheckedState'),
);
