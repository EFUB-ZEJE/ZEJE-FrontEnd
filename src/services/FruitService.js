import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const FruitService = {
  getFruitBoxPoint: async () =>
    API.get('/users/account/profile/fruitBox', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};
