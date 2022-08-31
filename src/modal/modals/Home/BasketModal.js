import React from 'react';
import {useBaksetModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import {palette} from '../../../styles/theme';
import {BasektThree, BasketEmpty, BasketOne, BasketTwo} from '../../../assets';
import {useFruitBoxPoint} from '../../../data/recoil/fruitBox/hooks/useFruitBoxPoint';

const BasketModal = () => {
  const {isModalOpen, closeModal} = useBaksetModal();
  const {fruitBoxPoint} = useFruitBoxPoint();

  //TODO: 열매 기부하기 기능 연결
  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={5} alignItems={'center'} w={'100%'} my={2}>
        {fruitBoxPoint === 0 ? (
          <BasketEmpty width={114} height={111} />
        ) : fruitBoxPoint === 1 ? (
          <BasketOne width={114} height={111} />
        ) : fruitBoxPoint === 2 ? (
          <BasketTwo width={114} height={111} />
        ) : (
          <BasektThree width={114} height={111} />
        )}

        <Column space={1} alignItems={'center'} mt={-3}>
          <Subhead_long3>
            {fruitBoxPoint}개 열매를 기부할 수 있어요
          </Subhead_long3>
          <Body_long1 style={{color: palette.bluegray}}>
            나의 걸음으로 부화시킨 감귤 열매는 포인트로 환산되어, 제주 환경
            보전을 위한 기금으로 기부됩니다.
          </Body_long1>
        </Column>

        <Column space={1} alignItems={'center'} w={'100%'}>
          <ModalButton
            onPress={() => {
              console.log('열매 기부하기');
            }}
            text={'열매 기부하기'}
          />
          <ModalButton onPress={closeModal} text={'취소하기'} white />
        </Column>
      </Column>
    </ModalSheet>
  );
};

export default BasketModal;
