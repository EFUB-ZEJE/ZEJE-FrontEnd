import {EV_STATION_API} from '../utils/api';
import axios from 'axios';
import Config from 'react-native-config';

const NUM_OF_BIKE_LOADS_TO_GET = 50;
const BikeService = {
  getBikeLoads: () =>
    axios.get(
      `https://api.odcloud.kr/api/3067626/v1/uddi:e2958b1f-3445-4173-be66-d3334fa43280_201811201051?serviceKey=${Config.EV_STATION_API_KEY}&perPage=${NUM_OF_BIKE_LOADS_TO_GET}`,
    ),
};

export default BikeService;
