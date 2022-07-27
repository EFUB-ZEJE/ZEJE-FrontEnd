import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer, ScreenHeader} from '../components';

export default function MyListScreen({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="리스트" />
      <ScreenContainer>
        <Text>리스트 스크린</Text>
      </ScreenContainer>
    </>
  );
}
