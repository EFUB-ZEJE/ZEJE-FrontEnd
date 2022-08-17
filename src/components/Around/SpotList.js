import {View, Text} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import Spot from './Spot';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {useRecoilState} from 'recoil';
import {MapRegionState} from '../../recoil/GlobalState';
import SvgIcon from '../common/SvgIcon';
import {SizedBox} from '../../components';
import {theme, palette} from '../../styles/theme';

//region: 현재 유저가 지도에서 보고 있는 지역의 좌표
export default function SpotList({places, type}) {
  const [region, setRegion] = useRecoilState(MapRegionState);
  const [isLoading, setIsLoading] = useState(true);

  function sortByMap() {
    return new Promise((resolve, reject) => {
      places.forEach(place => {
        const distBetween = haversine(region, place);
        place.dist = distBetween; //새로운 attr 추가
      });

      // dist가 가까운 순으로 정렬
      places.sort(function (a, b) {
        return a.dist - b.dist;
      });

      resolve(places);
      reject('sortByMap 실패');
    });
  }

  function sortByUser() {
    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        position => {
          places.forEach(place => {
            const distBetween = haversine(position.coords, place);
            place.dist = distBetween;
          });

          places.sort(function (a, b) {
            return a.dist - b.dist;
          });

          resolve(places);
        },
        error => {
          console.log(error.code, error.message);
          reject(error);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    });
  }

  useEffect(() => {
    setIsLoading(true);
    if (type === '내 위치 중심') {
      sortByUser()
        .then(placesSortedByUser => {
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    } else {
      sortByMap()
        .then(placesSortedByMap => {
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [type]);

  return (
    <>
      {isLoading == true ? (
        <Text>loading...</Text>
      ) : (
        places.map(place => (
          <Spot
            key={place.loadName}
            name={place.loadName}
            location={place.start}
          />
        ))
      )}
    </>
  );
}
