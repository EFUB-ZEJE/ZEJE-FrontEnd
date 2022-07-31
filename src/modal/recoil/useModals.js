import {generateModalHook} from './generateModalHook';
import {orangeRedModalState} from './modalStates';

export const useOrangeRedModal = generateModalHook(orangeRedModalState);
