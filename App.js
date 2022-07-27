import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {NativeBaseProvider} from 'native-base';
import {RecoilRoot} from 'recoil';
import ModalWrapper from './src/components/common/ModalWrapper';

export default function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <NavigationContainer>
          <TabNavigator />
          <ModalWrapper />
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
  );
}
