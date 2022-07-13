import React from 'react';
import {HomeScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      {/*이부분에 Home탭에서 사용할 스크린 추가 */}
    </HomeStack.Navigator>
  );
}
