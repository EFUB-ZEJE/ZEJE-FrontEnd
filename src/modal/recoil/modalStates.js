import {atom} from 'recoil';
// 유저가 보고 있는 지역

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
