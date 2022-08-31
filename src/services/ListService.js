import API from '../utils/api';
import {getData} from '../data/LocalStorage';
import {ACCESS_TOKEN} from '../data/LocalStorage';

const ListService = {
  getWishList: async () =>
    API.get(`/wish`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  addWishList: async spotId =>
    API.get(`/wish/${spotId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  deleteWishList: async spotId =>
    API.delete(`/wish/${spotId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};

export default ListService;
