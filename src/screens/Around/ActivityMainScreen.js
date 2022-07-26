import {Text} from 'react-native';
import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';

//둘러보기
export default function ActivityMainScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 액티비티"
        canGoBack={true}
      />
      <ScreenContainer>
        <Text>ActivityMain</Text>
      </ScreenContainer>
    </>
  );
};
