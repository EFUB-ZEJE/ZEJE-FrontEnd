import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const AroundService = {
  getTourList: async () =>
    API.get('/spots/search/travel', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  searchTourList: async search =>
    API.get(`/spots/search/travel/${search}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  getActivityList: async () =>
    API.get('/spots/search/experience', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  searchActivityList: async search =>
    API.get(`/spots/search/experience/${search}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  getSpot: async spotId =>
    API.get(`/spots/details/${spotId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};

