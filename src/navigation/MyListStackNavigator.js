import React from 'react';
import {MyListScreen} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MyListStack = createNativeStackNavigator();

export default function MyListStackNavigator() {
  return (
    <MyListStack.Navigator>
      <MyListStack.Screen name="MyList" component={MyListScreen} />
      {/*이부분에 MyList탭에서 사용할 스크린 추가 */}
    </MyListStack.Navigator>
  );
}
