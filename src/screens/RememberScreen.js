import React from 'react';
// import {Text} from 'react-native';
import {ScreenContainer, ScreenHeader, PostBanner} from '../components';
export default function RememberScreen({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="기록하기" />
      <ScreenContainer>
        <PostBanner
          icon="RightArrow"
          text="일기장 추가"
          navigation={navigation}
          path="BikeMain"
        />
      </ScreenContainer>
    </>
  );
}
