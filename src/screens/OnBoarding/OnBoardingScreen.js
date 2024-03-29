import React, {useEffect, useState} from 'react';
import {Column} from 'native-base';
import {ScrollView} from 'react-native';
import OnBoardingSlide from '../../components/OnBoarding/OnBoardingSlide';
import {palette, theme} from '../../styles/theme';
import layout from '../../styles/layout';
import {getData, IS_INSTALLED} from '../../data/LocalStorage';
import {useNavigation} from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function OnBoardingScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  async function getIsInstalled() {
    const value = await getData(IS_INSTALLED);
    if (value == 'true') {
      setIsLoading(false);
      navigation.navigate('Login');
    } else {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getIsInstalled();
  }, []);

  return (
    <ScrollView>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
      <Column
        flex={1}
        backgroundColor={palette.orange50}
        minHeight={layout.window.height}>
        <OnBoardingSlide />
      </Column>
    </ScrollView>
  );
}
