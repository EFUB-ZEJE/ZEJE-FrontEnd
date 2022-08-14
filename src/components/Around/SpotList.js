import {View, Text} from 'react-native';
import React, {useLayoutEffect, useEffect, useState} from 'react';
import Spot from './Spot';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {useRecoilState} from 'recoil';
import {MapRegionState} from '../../recoil/GlobalState';

//region: 현재 유저가 지도에서 보고 있는 지역의 좌표
export default function SpotList({sproutPlaces, type}) {
  const [region, setRegion] = useRecoilState(MapRegionState);

  useEffect(() => {
    if (type === '지도 중심') {
      Geolocation.getCurrentPosition(
        // 내 현재 위치 가
        position => {
          //각 place 객체에 dist 속성 추가
          sproutPlaces.forEach(place => {
            const distBetween = haversine(position.coords, place);
            place.dist = distBetween; //새로운 attr 추가
          });

          // dist가 가까운 순으로 정렬
          sproutPlaces.sort(function (a, b) {
            return a.dist - b.dist;
          });

          /*
            for (var place of sproutPlaces) {
              console.log(place.dist); //오름차순 정렬되어있는지 확인
            }
            */
        },
        error => {
          console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      //지도 중심 정렬

      sproutPlaces.forEach(place => {
        const distBetween = haversine(region, place);
        place.dist = distBetween; //새로운 attr 추가
      });
      // dist가 가까운 순으로 정렬
      sproutPlaces.sort(function (a, b) {
        return a.dist - b.dist;
      });
    }
  }, [type]);

  return (
    <>
      {sproutPlaces.map(place => (
        <Spot
          key={place.spotId}
          name={place.name}
          desc={place.description}
          location={place.location}
        />
      ))}
    </>
  );
}
