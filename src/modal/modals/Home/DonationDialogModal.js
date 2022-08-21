import React from 'react';
import {useDonationDialogModalState} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import {palette} from '../../../styles/theme';
import {BasektThree, BasketEmpty, BasketOne, BasketTwo} from '../../../assets';
import {NumOfFruit} from '../../../components/home/Basket';
import {SvgIcon} from '../../../components';

const DonationDialogModal = () => {
  const {isModalOpen, closeModal} = useDonationDialogModalState();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={7} alignItems={'center'} w={'100%'} my={2}>
        <SvgIcon name={'DonationBadge'} size={'132px'} />

        <Column space={3} alignItems={'center'} mt={-3}>
          <Subhead_long3>세이브 제주바다</Subhead_long3>
          <Body_long1 style={{color: palette.bluegray}}>
            감귤 열매는 깨끗한 바다를 만들기 위해 매월 {'\n'}
            바다정화 봉사활동을 하고 일회용 플라스틱 {'\n'}
            쓰레기를 줄이기 캠페인을 하는 세이브 제주{'\n'}바다에 기부됩니다.
          </Body_long1>
        </Column>

        <Column space={1} alignItems={'center'} w={'100%'}>
          <ModalButton
            onPress={() => {
              console.log('열매 기부하기');
            }}
            text={'기부처 홈페이지 바로가기'}
          />
          <ModalButton onPress={closeModal} text={'닫기'} white />
        </Column>
      </Column>
    </ModalSheet>
  );
};

export default DonationDialogModal;
