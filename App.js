import React from 'react';
import {NativeBaseProvider} from 'native-base';
import StackNavigator from './src/navigation/StackNavigator.js';
import {NavigationContainer} from '@react-navigation/native';
import {RecoilRoot} from 'recoil';
import ModalWrapper from './src/components/common/modal/ModalWrapper.js';

export default function App() {
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
