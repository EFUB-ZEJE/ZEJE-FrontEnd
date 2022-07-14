import React from 'react';
import {MyPageScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyPageStack = createNativeStackNavigator();

export default function MyPageStackNavigator() {
  return (
    <MyPageStack.Navigator>
      <MyPageStack.Screen name="MyPage" component={MyPageScreen} />
      {/*이부분에 MyPage탭에서 사용할 스크린 추가 */}
    </MyPageStack.Navigator>
  );
}
