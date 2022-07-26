import {Text} from 'react-native';
import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';

//둘러보기
export default function TourMainScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 여행지"
        canGoBack={true}
      />
      <ScreenContainer>
        <Text>TourMain</Text>
      </ScreenContainer>
    </>
  );
};
