import React from 'react';
import TabNavigator from './TabNavigator';
import {
  HomeScreen,
  MypageMainScreen,
  AlertMainScreen,
  MyListScreen,
  AroundScreen,
  ActivityMainScreen,
  TourMainScreen,
  BatteryMainScreen,
  BikeMainScreen,
  RememberScreen,
  SpotMainScreen,
  ShareInfoMainScreen,
  DairyPostScreen,
  DairyDetailScreen,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />

      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MypageMain" component={MypageMainScreen} />
      <Stack.Screen name="AlertMain" component={AlertMainScreen} />

      <Stack.Screen name="MyList" component={MyListScreen} />

      <Stack.Screen name="Around" component={AroundScreen} />
      <Stack.Screen name="ActivityMain" component={ActivityMainScreen} />
      <Stack.Screen name="TourMain" component={TourMainScreen} />
      <Stack.Screen name="BatteryMain" component={BatteryMainScreen} />
      <Stack.Screen name="BikeMain" component={BikeMainScreen} />
      <Stack.Screen name="SpotMain" component={SpotMainScreen} />
      <Stack.Screen name="ShareInfoMain" component={ShareInfoMainScreen} />

      <Stack.Screen name="Remember" component={RememberScreen} />
      <Stack.Screen name="DairyPost" component={DairyPostScreen} />
      <Stack.Screen name="DairyDetail" component={DairyDetailScreen} />
    </Stack.Navigator>
  );
}
