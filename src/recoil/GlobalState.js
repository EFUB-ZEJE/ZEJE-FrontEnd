import {atom} from 'recoil';
// 유저가 보고 있는 지역
export const MapRegionState = atom({
  key: 'MapRegionState',
  default: {
    latitude: 33.38,
    latitudeDelta: 0.09,
    longitude: 126.43,
    longitudeDelta: 0.07,
  },
});
