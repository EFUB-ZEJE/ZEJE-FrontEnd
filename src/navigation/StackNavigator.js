import React from 'react';
import TabNavigator from './TabNavigator';
import {
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
  EcoItemScreen,
  ProfileEditScreen,
  InformationScreen,
  OpenSourceScreen,
  MyReviewScreen,
  LicenseDetailScreen,
  OnBoardingScreen,
  ToSDetailScreen,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/LoginScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="OnBoarding"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ToSDetail" component={ToSDetailScreen} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="EcoItem" component={EcoItemScreen} />

      <Stack.Screen name="Home" component={MyListScreen} />
      <Stack.Screen name="MypageMain" component={MypageMainScreen} />
      <Stack.Screen name="AlertMain" component={AlertMainScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="MyReview" component={MyReviewScreen} />
      <Stack.Screen name="OpenSource" component={OpenSourceScreen} />
      <Stack.Screen name="License" component={LicenseDetailScreen} />
      <Stack.Screen name="ProfileEdit" component={ProfileEditScreen} />

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
