import React from 'react';
import BasketModal from '../../../modal/modals/Home/BasketModal';
import LetterModal from '../../../modal/modals/Home/LetterModal';
import OrangeGoldModal from '../../../modal/modals/Home/OrangeGoldModal';
import OrangeGreenModal from '../../../modal/modals/Home/OrangeGreenModal';
import OrangeMandarinModal from '../../../modal/modals/Home/OrangeMandarinModal';
import OrangeMtModal from '../../../modal/modals/Home/OrangeMtModal';
import OrangeRedModal from '../../../modal/modals/Home/OrangeRedModal';
import OrangeSourModal from '../../../modal/modals/Home/OrangeSourModal';
import OrangeThousandModal from '../../../modal/modals/Home/OrangeThousandModal';
import OrangeTinyModal from '../../../modal/modals/Home/OrangeTinyModal';
import UnRegisterCheckModal from '../../../modal/modals/Home/UnRegisterCheckModal';
import UnRegisterDoneModal from '../../../modal/modals/Home/UnRegisterDoneModal';

const ModalWrapper = () => {
  return (
    <>
      <OrangeGoldModal />
      <OrangeGreenModal />
      <OrangeMandarinModal />
      <OrangeMtModal />
      <OrangeRedModal />
      <OrangeSourModal />
      <OrangeThousandModal />
      <OrangeTinyModal />
      <LetterModal />
      <BasketModal />
      <UnRegisterCheckModal />
      <UnRegisterDoneModal />
    </>
  );
};
export default ModalWrapper;
