import axios from 'axios';
import {ACCESS_TOKEN, getData} from '../../../data/LocalStorage';

export const baseUrl = 'https://zeje.shop';

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    'X-AUTH-TOKEN': getData(ACCESS_TOKEN),
  },
});

const config = {
  baseURL: baseUrl,
};
export const axiosBase = axios.create(config);
