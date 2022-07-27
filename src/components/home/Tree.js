import {Box, Image, Pressable, Row} from 'native-base';
import React from 'react';
import {useOrangeInfoModal} from '../../recoil/modal/useModals';
import LeftFlowers from './LeftFlowers';
import LeftWalks from './LeftWalks';

function Tree() {
  const {openModal} = useOrangeInfoModal();

  return (
    <Box h={'85%'} mt={-5}>
      <Row
        position={'absolute'}
        top={'3%'}
        zIndex={10}
        justifyContent={'center'}
        alignSelf={'center'}
        space={'3%'}>
        <LeftFlowers leftFlowers={0} />
        <LeftWalks leftWalks={0} />
      </Row>
      <Pressable onPress={openModal}>
        <Image
          alt="tree background"
          h={'100%'}
          resizeMode={'contain'}
          source={require(`../../assets/images/tree.png`)}
        />
      </Pressable>
    </Box>
  );
}

export default Tree;
