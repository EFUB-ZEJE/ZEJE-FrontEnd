import {View, Text} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import Spot from './Spot';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';

export default function SpotList({sproutPlaces, type}) {
  useLayoutEffect(() => {
    Geolocation.getCurrentPosition(
      // 내 현재 위치 가져오기
      position => {
        if (type === '내 위치 중심') {
          //각 객체에 place값 추가
          sproutPlaces.forEach(place => {
            const distBetween = haversine(position.coords, place);
            place.dist = distBetween; //새로운 attr 추가
          });

          sproutPlaces.sort(function (a, b) {
            return a.dist - b.dist; // dist가 더 작은것이 먼저오도록
          });

          for (var place of sproutPlaces) {
            console.log(place); //오름차순 정렬되어있는지 확인
          }
        }
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  }, []);

  return (
    <>
      {sproutPlaces.map(
        (
          place, // 내위치 중심 -> 나중에 수정 필요
        ) => (
          <Spot
            key={place.spotId}
            name={place.name}
            desc={place.description}
            location={place.location}
          />
        ),
      )}
    </>
  );
}
