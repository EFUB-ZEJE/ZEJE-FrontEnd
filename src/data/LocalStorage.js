import AsyncStorage from '@react-native-async-storage/async-storage';

export const STEP_COUNT = 'stepCount';
export const ACCESS_TOKEN = 'accessToken';
export const ORANGE_LIST = 'orangeList';
export const IS_INSTALLED = 'isInstalled'; //최초 설치 여부 판단

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    // 혹시 이부분도 key를 stringfy하게끔 수정해도 될까용
  } catch (e) {
    console.log(e);
  }
};
export const getData = async key => {
  try {
    const loadedData = await AsyncStorage.getItem(key);
    return loadedData != null ? JSON.parse(loadedData) : null;
  } catch (e) {
    console.log(e);
  }
};

export const saveStepCount = async value => {
  if (value == null) value = 0;
  try {
    await AsyncStorage.setItem(STEP_COUNT, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
};
