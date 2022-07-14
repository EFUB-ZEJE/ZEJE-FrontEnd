import React from 'react';
import {RememberScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RememberStack = createNativeStackNavigator();

export default function RememberStackNavigator() {
  return (
    <RememberStack.Navigator>
      <RememberStack.Screen name="Remember" component={RememberScreen} />
      {/*이부분에 Remember탭에서 사용할 스크린 추가 */}
    </RememberStack.Navigator>
  );
}
