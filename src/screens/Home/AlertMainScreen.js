import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Text} from 'react-native';

export default function AlertMainScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="알림"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Text>알림 스크린</Text>
      </ScreenContainer>
    </>
  );
}
