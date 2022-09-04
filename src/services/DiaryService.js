import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const DiaryService = {
  getDiaries: async () =>
    API.get('/diaries', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  addDiary: async name =>
    API.post(
      '/diaries',
      {name: name, description: name},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
  addMemory: async (dirayId, title, content) =>
    API.post(
      '/diaries/' + dirayId + '/memories',
      {title: title, content: content},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
  //   donateFruitBoxPoint: async fruitBoxPoint =>
  //     API.post(
  //       '/donations',
  //       {fruitBox: fruitBoxPoint},
  //       {
  //         headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
  //       },
  //     ),
  //   getDonatedFruitBoxPoint: async () =>
  //     API.get('/donations', {
  //       headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
  //     }),
};
