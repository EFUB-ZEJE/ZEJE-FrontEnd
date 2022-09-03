import React, {useEffect} from 'react';
import {
  CommonBanner,
  ScreenContainer,
  ScreenHeader,
  SizedBox,
} from '../../components';
import Home from '../../components/home/Home';
import {theme} from '../../styles/theme';
import {getData, ORANGE_LIST} from '../../data/LocalStorage';

export default function HomeScreen({navigation}) {
  async function initOrangeList() {
    const list = await getData(ORANGE_LIST);
    if (list) setOrange(list);
  }

  useEffect(() => {
    // 필요 로컬데이터 초기화
    initOrangeList();
  }, []);

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
