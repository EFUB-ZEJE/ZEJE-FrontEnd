import {Image, Pressable, Row} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import styled from 'styled-components';
import {usePedometer} from '../../feature/pedometer/recoil/usePedometer';
import {theme} from '../../styles/theme';

function LeftWalks() {
  const {stepCount, setStepCount} = usePedometer();

  return (
    <Row style={styles.container}>
      <Image
        alt="leaf icon"
        size="16px"
        source={require('../../assets/images/footprint-fill.png')}
      />
      <Pressable
        onPress={() => {
          setStepCount(stepCount + 1000);
        }}>
        <TextBold fontSize={12} color={theme.colors.font} fontWeight={700}>
          {stepCount.toString()}걸음
        </TextBold>
      </Pressable>
    </Row>
  );
}

export default LeftWalks;

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

const TextBold = styled.Text`
  font-size: 12px;
  color: ${theme.colors.font};
  font-weight: 700;
`;
