import React from 'react';
import {
  CommonBanner,
  ScreenContainer,
  ScreenHeader,
  SizedBox,
} from '../../components';
import Home from '../../components/home/Home';
import {theme} from '../../styles/theme';

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
          onPress={() => navigation.navigate('SpotMain')}
        />
      </ScreenContainer>
    </>
  );
}
