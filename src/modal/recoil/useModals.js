import {generateModalHook} from './generateModalHook';
import {
  orangeGoldModalState,
  orangeGreenModalState,
  orangeMandarinModalState,
  orangeMtModalState,
  orangeRedModalState,
  orangeSourModalState,
  orangeThousandModalState,
  orangeTinyModalState,
  ArriveSpotModalState,
  DistanceToSpotModalState,
  GetAllFlowersModalState,
  GetPossibleFlowersModalState,
  NotFoundModalState,
} from './modalStates';

export const useOrangeGoldModal = generateModalHook(orangeGoldModalState);
export const useOrangeGreenModal = generateModalHook(orangeGreenModalState);
export const useOrangeMandarinModal = generateModalHook(
  orangeMandarinModalState,
);
export const useOrangeMtModal = generateModalHook(orangeMtModalState);
export const useOrangeRedModal = generateModalHook(orangeRedModalState);
export const useOrangeSourModal = generateModalHook(orangeSourModalState);
export const useOrangeThousandModal = generateModalHook(
  orangeThousandModalState,
);
export const useOrangeTinyModal = generateModalHook(orangeTinyModalState);

export const useArriveSpotModal = generateModalHook(ArriveSpotModalState);
export const useDistanceToSpotModal = generateModalHook(
  DistanceToSpotModalState,
);
export const useGetAllFlowersModal = generateModalHook(GetAllFlowersModalState);
export const useGetPossibleFlowersModal = generateModalHook(
  GetPossibleFlowersModalState,
);
export const useNotFoundModal = generateModalHook(NotFoundModalState);
