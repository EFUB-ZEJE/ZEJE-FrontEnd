import React from 'react';
import {ScreenContainer, ScreenHeader, DiaryList} from '../components';

export default function RememberScreen({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="기록하기" />

      <DiaryList navigation={navigation} />
    </>
  );
}
