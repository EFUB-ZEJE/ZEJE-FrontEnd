//이용약관

import {View, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import {Subhead3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import {palette} from '../../styles/theme';
export default function TosScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="이용약관"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Subhead3>이용약관</Subhead3>

        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              'https://www.notion.so/a64e6dce87134d989a9403320e424387',
            )
          }>
          <Body1 color={'blue'}>
            https://www.notion.so/a64e6dce87134d989a9403320e424387
          </Body1>
        </TouchableOpacity>
      </ScreenContainer>
    </>
  );
}
