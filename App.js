import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {NativeBaseProvider} from 'native-base';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
