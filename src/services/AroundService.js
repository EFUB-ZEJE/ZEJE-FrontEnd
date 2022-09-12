import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const AroundService = {
  getSproutPoints: async () =>
    API.get('/spots/flowers/today-visit/lists', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
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
  saveVisited: async (
    spotId, // 방문한 것 저장.
  ) =>
    API.post(
      `/spots/flowers`,
      {spotId: spotId},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
  reportSpot: async body =>
    API.post('/spotReports', body, {
      headers: {
        'X-AUTH-TOKEN': await getData(ACCESS_TOKEN),
        'content-type': 'multipart/form-data',
      },
    }),

  writeReview: async body =>
    API.post('/reviews', body, {
      headers: {
        'X-AUTH-TOKEN': await getData(ACCESS_TOKEN),
        'content-type': 'multipart/form-data',
      },
    }),
  getReviews: async spotId =>
    API.get(`/reviews/spots/${spotId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  deleteReview: async reviewId =>
    API.delete(`reviews/${reviewId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};
