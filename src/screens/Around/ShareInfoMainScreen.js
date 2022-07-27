import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Text} from 'react-native';

export default function ShareInfoMainScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="장소 제보하기"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Text>장소</Text>
      </ScreenContainer>
    </>
  );
}
