import * as React from 'react';
import {theme, palette} from '../styles/theme';
import {SvgIcon} from '../components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  HomeScreen,
  MyListScreen,
  AroundScreen,
  RememberScreen,
} from '../screens';
const Tab = createBottomTabNavigator();
const themeGray = palette.gray200;
const themeMain = theme.colors.main;

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="AroundScreen"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName;
          const color = focused ? themeMain : '#DCDCDC';
          if (route.name === '홈') {
            iconName = 'HomeTab';
          } else if (route.name === '리스트') {
            iconName = 'ListTab';
          } else if (route.name === '둘러보기') {
            iconName = 'AroundTab';
          } else if (route.name === '기록하기') {
            iconName = 'RememberTab';
          }
          return <SvgIcon name={iconName} size="20px" color={color} />;
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: themeMain,
        tabBarInactiveTintColor: themeGray,
        tabBarLabelStyle: {
          fontFamily: 'Pretendard',
          fontSize: 12,
          fontWeight: 'medium',
          letterSpacing: -0.6,
        },
        tabBarStyle: {
          width: '100%',
          height: 62,
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 8,
          paddingBottom: 15,
        },
      })}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="리스트" component={MyListScreen} />
      <Tab.Screen name="둘러보기" component={AroundScreen} />
      <Tab.Screen name="기록하기" component={RememberScreen} />
    </Tab.Navigator>
  );
}
