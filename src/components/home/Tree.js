import {Image, Pressable} from 'native-base';
import React from 'react';
import {useOrangeInfoModal} from '../../recoil/modal/useModals';
import OrangeBox from './oranges/OrangeBox';

function Tree() {
  const {openModal} = useOrangeInfoModal();

  return (
    <Pressable onPress={openModal}>
      <OrangeBox />
      <Image
        alt="tree background"
        h={'493px'}
        resizeMode={'contain'}
        source={require(`../../assets/images/tree.png`)}
      />
    </Pressable>
  );
}

export default Tree;
