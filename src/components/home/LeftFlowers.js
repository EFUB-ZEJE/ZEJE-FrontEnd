import {Image, Row} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

function LeftFlowers({leftFlowers}) {
  return (
    <Row style={styles.container}>
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
        <TextBold fontSize={12} color={theme.colors.font} fontWeight={700}>
          {leftFlowers.toString()}개
        </TextBold>
      </Row>
    </Row>
  );
}

export default LeftFlowers;

const styles = StyleSheet.create({
  container: {
    height: 32,
    width: '45%',
    backgroundColor: 'white',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

const Text = styled.Text`
  font-size: 12px;
  color: ${theme.colors.font};
`;

const TextBold = styled.Text`
  font-size: 12px;
  color: ${theme.colors.font};
  font-weight: 700;
`;
