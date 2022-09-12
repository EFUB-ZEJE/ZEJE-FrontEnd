import React from 'react';
import {Pressable} from 'native-base';
import OrangeSvg from './OrangeSvg';
import {
  useOrangeGoldModal,
  useOrangeGreenModal,
  useOrangeMandarinModal,
  useOrangeMtModal,
  useOrangeRedModal,
  useOrangeSourModal,
  useOrangeThousandModal,
  useOrangeTinyModal,
} from '../../../modal/recoil/useModals';
import OrangeSmallProgressBar from './OrangeSmallProgressBar';
import {usePedometer} from '../../../feature/pedometer/recoil/usePedometer';
import {useOrange} from '../../../data/recoil/oranges/hooks/useOrange';
import {useFocusedOrangeOrder} from '../../../data/recoil/oranges/hooks/useFocusedOrangeOrder';
import {useLeftFlowers} from '../../../data/recoil/fruitBox/hooks/useLeftFlowers';

export const ORANGES_LIST = [
  {
    name: 'OrangeFlower',
    maxWalk: 100,
  },
  {
    name: 'OrangeGold',
    maxWalk: 12000,
  },
  {
    name: 'OrangeGreen',
    maxWalk: 8000,
  },
  {
    name: 'OrangeMandarin',
    maxWalk: 11000,
  },
  {
    name: 'OrangeMt',
    maxWalk: 4000,
  },
  {
    name: 'OrangeRed',
    maxWalk: 2000,
  },
  {
    name: 'OrangeSour',
    maxWalk: 4000,
  },
  {
    name: 'OrangeThousand',
    maxWalk: 3000,
  },
  {
    name: 'OrangeTiny',
    maxWalk: 4000,
  },
];

export default function Orange({top, left, right, order}) {
  const {openModal: openGoldModal} = useOrangeGoldModal();
  const {openModal: openGreenModal} = useOrangeGreenModal();
  const {openModal: openMandarinModal} = useOrangeMandarinModal();
  const {openModal: openMtModal} = useOrangeMtModal();
  const {openModal: openRedModal} = useOrangeRedModal();
  const {openModal: openSourModal} = useOrangeSourModal();
  const {openModal: openThousandModal} = useOrangeThousandModal();
  const {openModal: openTinyModal} = useOrangeTinyModal();
  const {stepCount, storeStepCount} = usePedometer();
  const {orange, storeOrange} = useOrange();
  const {setFocusedOrangeOrder} = useFocusedOrangeOrder();
  const {leftFlowers, setLeftFlowers, minusLeftFlowers} = useLeftFlowers();

  // [꽃봉오리->오렌지] 바뀐 내용 로컬 및 리코일에 저장
  const setChangedOrangeData = randomInt => {
    if (order != 0) {
      storeOrange({
        ...orange,
        [order]: {
          name: ORANGES_LIST[randomInt].name,
          maxWalk: ORANGES_LIST[randomInt].maxWalk,
        },
      });
    }
  };

  const changeFlowerToOrange = () => {
    if (stepCount >= 10) {
      storeStepCount(stepCount - 10);
      let randomInt = parseInt(Math.random() * 8);

      setChangedOrangeData(randomInt);
    }
  };

  const openModal = name => {
    name === 'OrangeGold'
      ? openGoldModal()
      : name === 'OrangeGreen'
      ? openGreenModal()
      : name === 'OrangeMandarin'
      ? openMandarinModal()
      : name === 'OrangeMt'
      ? openMtModal()
      : name === 'OrangeRed'
      ? openRedModal()
      : name === 'OrangeSour'
      ? openSourModal()
      : name === 'OrangeThousand'
      ? openThousandModal()
      : openTinyModal();
  };

  const onPressHandler = name => {
    if (name == 'OrangeFlower') {
      changeFlowerToOrange();
    } else {
      openModal(name);
      setFocusedOrangeOrder(order);
    }
  };

  if (orange[order].name == '') return <></>;
  return (
    <Pressable
      onPress={() => {
        onPressHandler(orange[order].name);
      }}
      position={'absolute'}
      top={top}
      left={left}
      right={right}>
      <OrangeSvg name={orange[order].name} width={48} height={48} />
      <OrangeSmallProgressBar maxWalk={orange[order].maxWalk} />
    </Pressable>
  );
}
