import {Text, View, StyleSheet} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import MapView, {Marker} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
import {SvgIcon} from '../../components/common/SvgIcon';
import {UnvistedMarkerSmall} from '../../assets';
import {Svg, Path} from 'react-native-svg';
import {DistanceToSpotModalState} from '../../modal/recoil/modalStates';
import {useRecoilState} from 'recoil';
import DistanceToSpotModal from '../../modal/modals/Around/DistanceToSpotModal';
import {ArriveSpotModalState} from '../../modal/recoil/modalStates';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {PermissionsAndroid} from 'react-native';
import ArriveSpotModal from '../../modal/modals/Around/ArriveSpotModal';

const ARRIVEDSTANDARD = 0.1; //0.1km=100m
export default function Map({places, navigation}) {
  const [placeDetailModalVisible, setPlaceDetailModalVisible] = useRecoilState(
    DistanceToSpotModalState,
  );

  const [ArriveSpotModalVisible, setArriveSpotModalVisible] =
    useRecoilState(ArriveSpotModalState);
  const [focusedSpot, setFocusedSpot] = useState(null);

  const [distBetween, setDistBetween] = useState(0);

  // 위치 정보 승인 요청
  async function requestPermissions() {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('승인되었습니다');
      }
    }
  }

  const _onMarkerClick = place => {
    Geolocation.getCurrentPosition(
      position => {
        setFocusedSpot(place); //현재 포커스된 spot 변경
        // 내위치와 스팟간의 거리차이 계산 (단위 : km)
        const dist_between = haversine(position.coords, place);
        setDistBetween(dist_between);
        console.log('거리차이set');
        //console.log('내위치', position.coords);
        //console.log('현재포커스된장소', focusedSpot);

        //console.log(dist_between);
        if (dist_between <= ARRIVEDSTANDARD) {
          //거리차이가 기준치 이하라면

          setArriveSpotModalVisible(true); //도착 모달 on
        } else setPlaceDetailModalVisible(true); // 상세설명모달 on (도착x시)
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  useEffect(() => {
    requestPermissions();
  }, []);

  console.log('hello');
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          // 제주도 위치
          latitude: 33.38825,
          longitude: 126.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        followsUserLocation
        showsUserLocation>
        {places.map(place => {
          return (
            <Marker
              key={place.spotId}
              onPress={() => _onMarkerClick(place)}
              coordinate={{
                // 제주도 위치
                latitude: place.latitude,
                longitude: place.longitude,
              }}>
              <View style={{width: 40, height: 56}}>
                <Svg // 방문안했을때 오렌지색 마커
                  width="29"
                  height="37"
                  viewBox="0 0 29 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <Path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5 0C6.50906 0 0 6.4032 0 14.2642C0 16.4672 0.928274 18.8122 2.20332 21.2403C3.47837 23.6686 5.14446 26.1601 6.80254 28.417C10.1187 32.9305 13.4238 36.5297 13.4238 36.5297C13.5598 36.6778 13.7258 36.7962 13.9112 36.8772C14.0966 36.9583 14.2972 37.0001 14.5 37.0001C14.7029 37.0001 14.9034 36.9583 15.0888 36.8772C15.2742 36.7962 15.4402 36.6778 15.5762 36.5297C15.5762 36.5297 18.8813 32.9305 22.1975 28.417C23.8555 26.1601 25.5216 23.6686 26.7967 21.2403C28.0717 18.8122 29 16.4672 29 14.2642C29 6.4032 22.4909 0 14.5 0ZM26.0999 14.2641C26.0999 11.606 25.1841 9.165 23.6447 7.2288C25.1841 9.16502 26.1 11.606 26.1 14.2642C26.1 15.6065 25.397 17.6991 24.2252 19.9309C23.0534 22.1624 21.457 24.5618 19.8525 26.7454C17.4001 30.0835 15.632 32.043 14.7226 33.0509L14.7215 33.0522C14.6408 33.1415 14.567 33.2233 14.5 33.298L14.4999 33.2979C14.5672 33.2229 14.6415 33.1406 14.7225 33.0508L14.7226 33.0507C15.632 32.0428 17.4001 30.0833 19.8525 26.7453C21.4569 24.5617 23.0533 22.1623 24.2251 19.9308C25.397 17.699 26.0999 15.6064 26.0999 14.2641ZM8.84251 11.584C8.74926 11.9879 8.7 12.4075 8.7 12.8378C8.7 13.2681 8.74926 13.6878 8.84251 14.0916V14.0919C8.74922 13.6879 8.69993 13.2681 8.69993 12.8377C8.69993 12.4073 8.74922 11.9876 8.84251 11.5836V11.584ZM14.5 7.1321C13.257 7.1321 12.1011 7.52351 11.1535 8.18702H11.1533C12.1009 7.52346 13.2569 7.13203 14.4999 7.13203C15.743 7.13203 16.8989 7.52346 17.8465 8.18702H17.8465C16.8989 7.52351 15.743 7.1321 14.5 7.1321Z"
                    fill="#FFCB7C"
                  />
                  <Path
                    d="M8.92994 8.69824C8.30713 8.69824 7.80225 9.19072 7.80225 9.79823V12.6281C7.80225 14.7985 9.60603 16.558 11.8311 16.558C11.8777 16.558 11.9242 16.5572 11.9705 16.5557C11.7734 16.0139 11.6662 15.4306 11.6662 14.8229C11.6662 14.31 11.7426 13.8145 11.8849 13.3466L12.2811 12.4006C12.8465 11.3594 13.765 10.5287 14.881 10.0603C14.1423 9.22612 13.0499 8.69824 11.8311 8.69824H8.92994ZM13.5831 17.47L11.8608 19.1513C11.6723 19.3353 11.6724 19.6336 11.8611 19.8175C12.0498 20.0014 12.3556 20.0013 12.5441 19.8173L14.2663 18.1362C15.0099 18.7162 15.953 19.063 16.9791 19.063C19.3799 19.063 21.3261 17.1647 21.3261 14.8229V11.7392C21.3261 11.1005 20.7953 10.5828 20.1405 10.5828L16.9791 10.5828C14.5784 10.5828 12.6322 12.4811 12.6322 14.8229C12.6322 15.8243 12.988 16.7446 13.5831 17.47Z"
                    fill="white"
                  />
                </Svg>
              </View>
            </Marker>
          );
        })}
      </MapView>
      {focusedSpot && (
        <DistanceToSpotModal
          spotInfo={focusedSpot}
          navigation={navigation}
          dist_between={distBetween}
        />
      )}
      {focusedSpot && (
        <ArriveSpotModal spotInfo={focusedSpot} navigation={navigation} />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
