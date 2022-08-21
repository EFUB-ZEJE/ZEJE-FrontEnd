import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Text} from 'react-native';
import DonationDialogModal from '../../modal/modals/Home/DonationDialogModal';
import {useDonationDialogModalState} from '../../modal/recoil/useModals';

export default function MypageMainScreen({navigation}) {
  const {openModal, closeModal} = useDonationDialogModalState();
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="마이페이지"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Text>마이페이지 스크린</Text>
      </ScreenContainer>
      <DonationDialogModal />
    </>
  );
}
