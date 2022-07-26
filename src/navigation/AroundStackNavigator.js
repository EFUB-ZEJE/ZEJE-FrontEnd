import React from 'react';
import {AroundScreen, ActivityMainScreen, TourMainScreen} from '../screens';
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
      <AroundStack.Screen
        name="ActivityMain"
        component={ActivityMainScreen}
        options={{title: 'ZEJE의 추천 액티비티', headerShown: false}}
      />
      <AroundStack.Screen
        name="TourMain"
        component={TourMainScreen}
        options={{title: 'ZEJE의 추천 여행지', headerShown: false}}
      />
    </AroundStack.Navigator>
  );
}
