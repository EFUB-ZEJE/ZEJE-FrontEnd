import {ACCESS_TOKEN, saveData} from '../../../data/LocalStorage';
import {axiosBase} from '../axiosInstance';

export const useLoginAPI = () => {
  const storeToken = async token => {
    await saveData(ACCESS_TOKEN, JSON.stringify(token));
  };

  const loginAPI = async (kakaoLoginResponse, navigation) => {
    try {
      const data = await axiosBase.post('/users/login', kakaoLoginResponse);

      if (data) {
        navigation.navigate('TabNavigator');
        storeToken(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {loginAPI};
};
