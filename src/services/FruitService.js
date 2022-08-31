import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import {FRUIT_BOX_POINT_API} from '../utils/api';

export const FruitService = {
  getFruitBoxPoint: async () =>
    FRUIT_BOX_POINT_API.get('/users/account/profile/fruitBox', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};
