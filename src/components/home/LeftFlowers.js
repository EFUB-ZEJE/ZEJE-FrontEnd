import {Image, Row, Text} from 'native-base';
import React from 'react';
import {theme} from '../../styles/theme';

function LeftFlowers({leftFlowers}) {
  return (
    <Row
      h={'32px'}
      w={'130px'}
      bgColor={'white'}
      borderRadius={16}
      justifyContent={'space-between'}
      alignItems={'center'}
      px={3}>
      <Row space={1} alignItems={'center'}>
        <Image
          alt="leaf icon"
          size="16px"
          source={require('../../assets/images/leaf.png')}
        />
        <Text fontSize={12} color={theme.colors.font}>
          남은 꽃
        </Text>
      </Row>
      <Row>
        <Text fontSize={12} color={theme.colors.font} fontWeight={700}>
          {leftFlowers.toString()}개
        </Text>
      </Row>
    </Row>
  );
}

export default LeftFlowers;
