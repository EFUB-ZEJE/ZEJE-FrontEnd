import React, {useEffect} from 'react';
import {useOrangeMtModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeMt} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {usePedometer} from '../../../feature/pedometer/recoil/usePedometer';
import {useFruitBoxPoint} from '../../../data/recoil/fruitBox/hooks/useFruitBoxPoint';
import {useOrange} from '../../../data/recoil/oranges/hooks/useOrange';
import {useFocusedOrangeOrder} from '../../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {
  ORANGES_LIST,
  saveOrangeList,
} from '../../../components/home/oranges/Orange';

const OrangeMtModal = () => {
  const {isModalOpen, closeModal} = useOrangeMtModal();
  const maxWalk = ORANGES_LIST[4].maxWalk;
  const {stepCount} = usePedometer();
  const {addFruitBoxPoint} = useFruitBoxPoint();
  const {orange, deleteOrangeList} = useOrange();
  const {focusedOrangeOrder} = useFocusedOrangeOrder();

  const orangeToPoint = () => {
    addFruitBoxPoint({maxWalk: maxWalk});
    closeModal();

    // 리코일 오렌지리스트에서 삭제하기
    deleteOrangeList(focusedOrangeOrder);
  };

  // 로컬 오렌지리스트에서 삭제하기
  useEffect(() => {
    saveOrangeList(orange);
  }, [orange]);

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <Column space={3} alignItems={'center'} w={'100%'}>
        <OrangeMt width="100" height="100" />
        <Subhead_long3>한라산을 닮은 모양 한라봉</Subhead_long3>
        <Body_long1>
          꼭지가 튀어나온 모양이 꼭 한라산같은 한라봉은 과육이 부드럽고, 과즙이
          풍부하며 당도가 매우 높은 것이 특징이랍니다.
        </Body_long1>
        <OrangeModalProgressBar maxWalk={maxWalk} />

        {stepCount > maxWalk && (
          <ModalButton onPress={() => orangeToPoint()} text={'획득하기'} />
        )}
        <ModalButton onPress={closeModal} text={'닫기'} white />
      </Column>
    </ModalSheet>
  );
};

export default OrangeMtModal;
