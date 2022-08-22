import React from 'react';
import {Column} from 'native-base';
import {ScrollView} from 'react-native';
import OnBoardingSlide from '../../components/OnBoarding/OnBoardingSlide';
import OnBoardingBottom from '../../components/OnBoarding/OnBoardingBottom';
import {palette} from '../../styles/theme';
import layout from '../../styles/layout';

export default function OnBoardingScreen() {
  return (
    <ScrollView>
      <Column
        flex={1}
        backgroundColor={palette.orange50}
        minHeight={layout.window.height}>
        <OnBoardingSlide />
        <OnBoardingBottom />
      </Column>
    </ScrollView>
  );
}
