import {generateModalHook} from './generateModalHook';
import {orangeInfoModalState} from './modalStates';

export const useOrangeInfoModal = generateModalHook(orangeInfoModalState);
