import * as React from 'react';
import HomeStackNavigator from './HomeStackNavigator';
import MyListStackNavigator from './MyListStackNavigator';
import RememberStackNavigator from './RememberStackNavigator';
import MyPageStackNavigator from './MyPageStackNavigator';
import AroundStackNavigator from './AroundStackNavigator';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BOTTOM_HEIGHT} from '../styles/layout';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AroundTab" // 개발하는 페이지에 맞는걸로 설정해두면 편리할듯.
      screenOptions={{
        //tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          width: '100%',
          height: BOTTOM_HEIGHT,
        },
      }}>
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          headerShown: false, // Tab 헤더 가리기
          /*
 tabBarIcon: ({focused, color}) => (
            <Box>
              <Label>홈</Label>
            </Box>
          ),
          */
        }}
      />
      <Tab.Screen
        name="MyListTab"
        component={MyListStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AroundTab"
        component={AroundStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MyPageTab"
        component={MyPageStackNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="RememberTab"
        component={RememberStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
