import React, {useEffect} from 'react';
import {NativeBaseProvider} from 'native-base';
import StackNavigator from './src/navigation/StackNavigator.js';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import ModalWrapper from './src/components/common/modal/ModalWrapper.js';
import SplashScreen from 'react-native-splash-screen';

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationContainer>
          <StackNavigator />
          <ModalWrapper />
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}
