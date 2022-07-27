import {View} from 'native-base';
import React from 'react';
import Header from '../../components/home/header/Header';
import Home from '../../components/home/Home';
import {theme} from '../../styles/theme';

export default function HomeScreen() {
  return (
    <View bgColor={theme.colors.home_background}>
      <Header />
      <Home />
    </View>
  );
}
