import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const FruitService = {
  getFruitBoxPoint: async () =>
    API.get('/users/account/profile/fruitBox', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  setFruitBoxPoint: async () =>
    API.post(
      '/users/account/profile/fruitBox',
      {fruitBox: 1},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
};
