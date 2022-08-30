import axios from 'axios';
import {BASE_URL, EV_STATION_BASE_URL} from '../constants/config';
import Config from 'react-native-config';

// 로그인 - 토큰 발급 용 api
export const GET_ACCESS_TOKEN_API = axios.create({
  baseURL: BASE_URL,
});

// 전기차 충전소 조회용 Axios
export const EV_STATION_API = axios.create({
  baseURL: EV_STATION_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    serviceKey: Config.EV_STATION_API_KEY,
    pageNo: 1,
    numOfRows: 9999,
    zcode: 50,
    dataType: JSON,
  },

  withCredentials: false,
  crossDomain: true,
});
