import {EV_STATION_API} from '../utils/api';
import axios from 'axios';
import Config from 'react-native-config';

const NUM_OF_EV_STATIONS_TO_GET = 10;
const EVService = {
  getEVstation: () =>
    axios.get(
      `http://apis.data.go.kr/B552584/EvCharger/getChargerInfo?serviceKey=${Config.EV_STATION_API_KEY}&pageNo=1&numOfRows=${NUM_OF_EV_STATIONS_TO_GET}&zcode=50&dataType=JSON`,
    ),
};

export default EVService;
