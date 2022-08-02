import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer, ScreenHeader} from '../../components';

export default function DairyPostScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="일기 작성하기"
        canGoBack={true}
      />
      <ScreenContainer>
        <Text>일기 추가 스크린</Text>
      </ScreenContainer>
    </>
  );
}
