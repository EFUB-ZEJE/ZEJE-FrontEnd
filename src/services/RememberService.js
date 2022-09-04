import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const RememberService = {
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
  getMemories: async diaryId =>
    API.get(`/diaries/${diaryId}/memories`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  addMemory: async (dirayId, title, body) =>
    API.post(
      `/diaries/${dirayId}/memories`,
      {title: title, content: body},
      {
        headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
      },
    ),
};
