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

export default function Orange({name, maxWalk, top, left, right}) {
  const {openModal: openGoldModal} = useOrangeGoldModal();
  const {openModal: openGreenModal} = useOrangeGreenModal();
  const {openModal: openMandarinModal} = useOrangeMandarinModal();
  const {openModal: openMtModal} = useOrangeMtModal();
  const {openModal: openRedModal} = useOrangeRedModal();
  const {openModal: openSourModal} = useOrangeSourModal();
  const {openModal: openThousandModal} = useOrangeThousandModal();
  const {openModal: openTinyModal} = useOrangeTinyModal();

  return (
    <Pressable
      onPress={
        name === 'OrangeGold'
          ? openGoldModal
          : name === 'OrangeGreen'
          ? openGreenModal
          : name === 'OrangeMandarin'
          ? openMandarinModal
          : name === 'OrangeMt'
          ? openMtModal
          : name === 'OrangeRed'
          ? openRedModal
          : name === 'OrangeSour'
          ? openSourModal
          : name === 'OrangeThousand'
          ? openThousandModal
          : openTinyModal
      }
      position={'absolute'}
      top={top}
      left={left}
      right={right}>
      <OrangeSvg name={name} width={48} height={48} />
      <OrangeSmallProgressBar maxWalk={maxWalk} />
    </Pressable>
  );
}
