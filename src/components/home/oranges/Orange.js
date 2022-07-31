import React from 'react';
import {Pressable} from 'native-base';
import OrangeSvg from './OrangeSvg';
import {useOrangeRedModal} from '../../../modal/recoil/useModals';

export default function Orange({name, walk, top, left, right}) {
  const {openModal: openOrangeModal} = useOrangeRedModal();

  return (
    <Pressable
      onPress={name === 'OrangeRed' ? openOrangeModal : null}
      position={'absolute'}
      top={top}
      left={left}
      right={right}>
      <OrangeSvg name={name} width={48} height={48} />
    </Pressable>
  );
}
