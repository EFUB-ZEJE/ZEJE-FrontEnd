import React from 'react';
import {AroundScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const AroundStack = createNativeStackNavigator();

export default function AroundStackNavigator() {
  return (
    <AroundStack.Navigator>
      <AroundStack.Screen
        name="Around"
        component={AroundScreen}
        options={{headerShown: false}} // 둘러보기 페이지에서는 헤더 안보이도록
      />
      {/*이부분에 Around탭에서 사용할 스크린 추가 */}
    </AroundStack.Navigator>
  );
}
