import {ACCESS_TOKEN, getData} from '../data/LocalStorage';
import API from '../utils/api';

export const RememberService = {
  getDiaries: async () =>
    API.get('/diaries', {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  addDiary: async name =>
    API.post('/diaries', null, {
      params: {name: name, description: name},
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  getMemories: async diaryId =>
    API.get(`/diaries/${diaryId}/memories`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  getMemory: async (diaryId, memoryId) =>
    API.get(`/diaries/${diaryId}/memories/${memoryId}`, {
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
  addMemory: async (diaryId, title, body) =>
    API.post(`/diaries/${diaryId}/memories`, null, {
      params: {title: title, content: body},
      headers: {'X-AUTH-TOKEN': await getData(ACCESS_TOKEN)},
    }),
};
