import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer, ScreenHeader} from '../components';

export default function RememberScreen({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="기록하기" />
      <ScreenContainer>
        <Text>기록하기 스크린</Text>
      </ScreenContainer>
    </>
  );
}
