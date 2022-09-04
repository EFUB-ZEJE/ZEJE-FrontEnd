import React from 'react';
import BasketModal from '../../../modal/modals/Home/BasketModal';
import DonationDialogModal from '../../../modal/modals/Home/DonationDialogModal';
import LetterModal from '../../../modal/modals/Home/LetterModal';
import LogoutModal from '../../../modal/modals/Home/LogoutModal';
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
import ToSNotCheckedModal from '../../../modal/modals/Log/Login/ToSNotCheckedModal';

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
      <LogoutModal />
      <UnRegisterCheckModal />
      <UnRegisterDoneModal />
      <ToSNotCheckedModal />
      <DonationDialogModal />
    </>
  );
};
export default ModalWrapper;
