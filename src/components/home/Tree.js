import {Box, Image, Row} from 'native-base';
import React from 'react';
import LeftFlowers from './LeftFlowers';
import LeftWalks from './LeftWalks';

function Tree() {
  return (
    <Box h={'80%'} mt={-5}>
      <Row
        position={'absolute'}
        top={4}
        zIndex={10}
        justifyContent={'center'}
        alignSelf={'center'}
        space={5}>
        <LeftFlowers leftFlowers={0} />
        <LeftWalks leftWalks={0} />
      </Row>
      <Image
        alt="tree background"
        h={'100%'}
        resizeMode={'contain'}
        source={require(`../../assets/images/tree.png`)}
      />
    </Box>
  );
}

export default Tree;
