import API from '../utils/api';
import {getData} from '../data/LocalStorage';
import {ACCESS_TOKEN} from '../data/LocalStorage';
const MyPageService = {
  getProfile: async () =>
    API.get('/users/account/profile', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  getMyReviews: async () =>
    API.get('/reviews/my-review', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  editProfile: async body =>
    API.patch('/users/account/profile', body, {
      headers: {
        'X-AUTH-TOKEN': await getData(ACCESS_TOKEN),
        'content-type': 'multipart/form-data',
      },
    }),
    
};

export default MyPageService;
