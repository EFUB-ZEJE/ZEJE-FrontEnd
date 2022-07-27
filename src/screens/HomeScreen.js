import React from 'react';
import {theme} from '../styles/theme.js';
import {
  CommonBanner,
  ScreenContainer,
  ScreenHeader,
  SizedBox,
} from '../components';
import Home from '../components/home/Home';

export default function HomeScreen({navigation}) {
  return (
    <>
      <ScreenHeader isHome={true} navigation={navigation} />
      <ScreenContainer>
        <Home />
        <SizedBox height={16} />
        <CommonBanner
          text="여행지 방문해 꽃 더 모으기"
          color="white"
          bgColor={theme.colors.main}
          navigation={navigation}
          path="SpotMain"
        />
      </ScreenContainer>
    </>
  );
}
