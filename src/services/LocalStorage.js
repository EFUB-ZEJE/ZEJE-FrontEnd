import AsyncStorage from '@react-native-async-storage/async-storage';

export const STEP_COUNT = 'step_count';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
