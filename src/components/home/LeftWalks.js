import {Image, Row, Text} from 'native-base';
import React from 'react';
import {theme} from '../../styles/theme';

function LeftWalks({leftWalks}) {
  return (
    <Row
      h={'32px'}
      w={'44%'}
      bgColor={'white'}
      borderRadius={16}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={3}>
      <Image
        alt="leaf icon"
        size="16px"
        source={require('../../assets/images/footprint-fill.png')}
      />

      <Text fontSize={12} color={theme.colors.font} fontWeight={700}>
        {leftWalks.toString()}걸음
      </Text>
    </Row>
  );
}

export default LeftWalks;
