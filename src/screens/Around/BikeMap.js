import {Text, View, StyleSheet} from 'react-native';
import React, {Component, useState, useEffect} from 'react';
import MapView, {Marker, Polyline} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
import {SvgIcon} from '../../components/common/SvgIcon';
import {useRecoilState} from 'recoil';
import Geolocation from 'react-native-geolocation-service';
import haversine from 'haversine';
import {PermissionsAndroid} from 'react-native';
import {MapRegionState} from '../../recoil/GlobalState';
import OrangeMarker from '../../components/Around/maps/OrangeMarker';
import BicycleMarker from '../../components/Around/maps/BicycleMarker';
import BasicMarker from '../../components/Around/maps/BasicMarker';
import {theme} from '../../styles/theme';
import PlaceDetailModal from '../../modal/modals/Around/PlaceDetailModal';
import {PlaceDetailModalState} from '../../modal/recoil/modalStates';

export default function BikeMap({places}) {
  console.log('BikeMap');
  const [mapRegionState, setMapRegionState] = useRecoilState(MapRegionState);

  const [focusedSpot, setFocusedSpot] = useState(null);

  const [placeDetailModalVisible, setPlaceDetailModalVisible] = useRecoilState(
    PlaceDetailModalState,
  );
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
    setFocusedSpot(place);
    setPlaceDetailModalVisible(true);
  };
  useEffect(() => {
    requestPermissions();
  }, []);

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
        showsUserLocation
        onRegionChange={e => setMapRegionState(e)}>
        {places.map(place => {
          var MarkerSVG;
          var focused = focusedSpot
            ? focusedSpot.loadName == place.loadName
            : false;

          MarkerSVG = <BicycleMarker size={focused ? 'big' : 'small'} />;

          return (
            <Marker
              key={place.loadName}
              onPress={() => _onMarkerClick(place)}
              coordinate={{
                // 자전거 도로 시작 위치
                latitude: place.latitude,
                longitude: place.longitude,
              }}>
              {MarkerSVG}
            </Marker>
          );
        })}

        {focusedSpot && (
          <Polyline
            coordinates={[
              {
                latitude: focusedSpot.latitude,
                longitude: focusedSpot.longitude,
              },
              {
                latitude: focusedSpot.endLat,
                longitude: focusedSpot.endLng,
              },
            ]}
            strokeColor={theme.colors.main}
            strokeWidth={6}
          />
        )}
        {focusedSpot && (
          <Marker
            key={focusedSpot.loadName + '2'}
            coordinate={{
              // 자전거 도로 시작 위치
              latitude: focusedSpot.endLat,
              longitude: focusedSpot.endLng,
            }}>
            <BasicMarker />
          </Marker>
        )}
      </MapView>
      {focusedSpot && <PlaceDetailModal spotInfo={focusedSpot} />}
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
