import React, {useEffect, useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  CommonBanner,
  ScreenContainer,
  ScreenHeader,
  SizedBox,
} from '../../components';
import Home from '../../components/home/Home';
import {useFruitBoxPoint} from '../../data/recoil/fruitBox/hooks/useFruitBoxPoint';
import {theme} from '../../styles/theme';
import {FruitService} from '../../services/FruitService';

export default function HomeScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const {setFruitBoxPoint} = useFruitBoxPoint();

  useEffect(() => {
    FruitService.getFruitBoxPoint()
      .then(res => {
        setFruitBoxPoint(res.data.fruitBox);
      })
      .catch(err => {
        console.error(err);
      });
    setIsLoading(false);
  }, []);

  return (
    <>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
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
