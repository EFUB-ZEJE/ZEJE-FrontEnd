import {EV_STATION_API} from '../utils/api';

const EVService = {
  getEVstation: () => EV_STATION_API.get('/'),
};

export default EVService;
