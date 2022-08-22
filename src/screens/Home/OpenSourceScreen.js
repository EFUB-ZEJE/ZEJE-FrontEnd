//이용약관

import {View, Text} from 'react-native';
import React from 'react';
import {Subhead3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import {palette} from '../../styles/theme';

export default function TosScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="오픈소스 라이브러리"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Subhead3>오픈소스 라이브러리명</Subhead3>
        <Body1 color={palette.gray350}>설명</Body1>
      </ScreenContainer>
    </>
  );
}
