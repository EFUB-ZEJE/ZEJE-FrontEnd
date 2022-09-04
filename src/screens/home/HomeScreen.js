import React, {useEffect} from 'react';
import {
  CommonBanner,
  ScreenContainer,
  ScreenHeader,
  SizedBox,
} from '../../components';
import Home from '../../components/home/Home';
import {theme} from '../../styles/theme';
import {getData, ORANGE_LIST, STEP_COUNT} from '../../data/LocalStorage';
import {useOrange} from '../../data/recoil/oranges/hooks/useOrange';
import {usePedometer} from '../../feature/pedometer/recoil/usePedometer';
import {ScrollView} from 'native-base';

export default function HomeScreen({navigation}) {
  const {setOrange} = useOrange();
  const {setStepCount} = usePedometer();

  async function initAsyncStorage() {
    const orangeList = await getData(ORANGE_LIST);
    const stepCount = await getData(STEP_COUNT);
    if (orangeList) setOrange(orangeList);
    if (stepCount) setStepCount(stepCount);
  }

  useEffect(() => {
    initAsyncStorage();
  }, []);

  return (
    <ScrollView>
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
    </ScrollView>
  );
}
