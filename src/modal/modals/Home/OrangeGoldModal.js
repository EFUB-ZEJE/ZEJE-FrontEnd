import React, {useEffect} from 'react';
import {useOrangeGoldModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Column} from 'native-base';
import {OrangeGold} from '../../../assets/images/oranges';
import {Body_long1, Subhead_long3} from '../../../styles/font';
import ModalButton from '../../../components/home/ModalButton';
import OrangeModalProgressBar from '../../../components/home/oranges/OrangeModalProgressBar';
import {ORANGES_LIST} from '../../../components/home/oranges/OrangeBox';
import {usePedometer} from '../../../feature/pedometer/recoil/usePedometer';
import {useFruitBoxPoint} from '../../../data/recoil/fruitBox/hooks/useFruitBoxPoint';
import {useOrange} from '../../../data/recoil/oranges/hooks/useOrange';
import {useFocusedOrangeOrder} from '../../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {saveOrangeList} from '../../../components/home/oranges/Orange';

const OrangeGoldModal = () => {
  const {isModalOpen, closeModal} = useOrangeGoldModal();
  const maxWalk = ORANGES_LIST[1].maxWalk;
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
        <OrangeGold width="100" height="100" />
        <Subhead_long3>여왕의 품격, 황금향</Subhead_long3>
        <Body_long1>
          황금향은 여왕과 같은 품위를 지녔다고 해서 이런 이름이 붙었다고 합니다.
          알맹이가 통통하고 신맛이 적으며, 과즙이 풍부합니다.
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

export default OrangeGoldModal;
