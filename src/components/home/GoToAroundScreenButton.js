import React from 'react';
import {Image, Pressable, Row} from 'native-base';
import {theme} from '../../styles/theme';
import {Subhead3} from '../../styles/typography';

function GoToAroundScreenButton() {
  return (
    <Pressable
      bgColor={theme.colors.main}
      h={'50px'}
      w={'320px'}
      borderRadius={15}
      alignSelf={'center'}
      justifyContent={'center'}>
      <Row justifyContent={'space-around'}>
        <Subhead3 style={{color: 'white'}}>여행지 방문해 꽃 더 모으기</Subhead3>
        <Image
          alt="arrow right"
          size="24px"
          source={require(`../../assets/images/arrow-right.png`)}
        />
      </Row>
    </Pressable>
  );
}

export default GoToAroundScreenButton;
