import {Image, Pressable} from 'native-base';
import React from 'react';
import {useOrangeInfoModal} from '../../recoil/modal/useModals';

function Tree() {
  const {openModal} = useOrangeInfoModal();

  return (
    <Pressable onPress={openModal}>
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
