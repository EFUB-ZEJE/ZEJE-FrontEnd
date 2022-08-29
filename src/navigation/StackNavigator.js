import React, {useEffect, useState} from 'react';
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
  EcoItemScreen,
  TosScreen,
  ProfileEditScreen,
  InformationScreen,
  OpenSourceScreen,
  MyReviewScreen,
  LicenseDetailScreen,
} from '../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {usePedometer} from '../feature/pedometer/recoil/usePedometer';
import {
  accelerometer,
  SensorTypes,
  setUpdateIntervalForType,
} from 'react-native-sensors';
import {saveData, STEP_COUNT} from '../services/LocalStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

//setUpdateIntervalForType(SensorTypes.accelerometer, 400);

export default function StackNavigator() {
  /*
  const [xAcceleration, setXAcceleration] = useState(0);
  const [yAcceleration, setYAcceleration] = useState(0);
  const [zAcceleration, setZAcceleration] = useState(0);
  const [magnitudePrevious, setMagnitudePrevious] = useState(0);

  const {stepCount, setStepCount} = usePedometer();

  async function initStepCount() {
    const value = await AsyncStorage.getItem(STEP_COUNT);
    setStepCount(parseInt(value));
  }

  useEffect(() => {
    initStepCount();

    const subscription = accelerometer
      .pipe(data => data)
      .subscribe(speed => {
        setXAcceleration(speed.x);
        setYAcceleration(speed.y);
        setZAcceleration(speed.z);
      });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    const magnitude = Math.sqrt(
      Math.pow(xAcceleration, 2) +
        Math.pow(yAcceleration, 2) +
        Math.pow(zAcceleration, 2),
    );

    const magnitudeDelta = magnitude - magnitudePrevious;
    setMagnitudePrevious(() => magnitude);

    if (magnitudeDelta > 2) {
      setStepCount(prevSteps => prevSteps + 1);
      saveData(STEP_COUNT, stepCount.toString());
    }
  }, [xAcceleration, yAcceleration, zAcceleration]);
*/
  return (
    <Stack.Navigator
      initialRouteName="TabNavigator"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="EcoItem" component={EcoItemScreen} />

      <Stack.Screen name="Home" component={MyListScreen} />
      <Stack.Screen name="MypageMain" component={MypageMainScreen} />
      <Stack.Screen name="AlertMain" component={AlertMainScreen} />
      <Stack.Screen name="Information" component={InformationScreen} />
      <Stack.Screen name="MyReview" component={MyReviewScreen} />
      <Stack.Screen name="OpenSource" component={OpenSourceScreen} />
      <Stack.Screen name="License" component={LicenseDetailScreen} />
      <Stack.Screen name="Tos" component={TosScreen} />
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
