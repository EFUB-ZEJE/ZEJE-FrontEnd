import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
import MapView, {Marker, Polyline} from 'react-native-maps';
import {ScreenHeader} from '../../components';
import OrangeMarker from '../../components/Around/maps/OrangeMarker';
import Config from 'react-native-config';
import Geocoder from 'react-native-geocoding';
import SetLocationModal from '../../modal/modals/Around/setLocationModal.js';
import {AroundService} from '../../services/AroundService';

export default function SearchMapScreen({navigation, route}) {
  const {coordinate, setCoordinate} = route.params;

  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState('주소');
  const [title, setTitle] = useState('타이틀');

  Geocoder.init(Config.GOOGLE_MAP_API_KEY); // use a valid API key

  const _searchByName = name => {
    // Search by address
    Geocoder.from(name)
      .then(json => {
        console.log(json.results[0]);
        //var location = json.results[0].geometry.location;
        //console.log(location);
      })
      .catch(error => console.warn(error));
  };

  const _searchByGeoLocation = coordinate => {
    // Search by geo-location (reverse geo-code)
    Geocoder.from(coordinate.latitude, coordinate.longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components[0];
        console.log(addressComponent);
      })
      .catch(error => console.warn(error));

    setCoordinate(coordinate);
  };

  const _handleChange = text => {
    console.log(text);
    setSearchText(text);
  };
  return (
    <>
      {/**   <ScreenHeader
        navigation={navigation}
        screenTitle="친환경 스팟 제보하기"
        canGoBack={true}
        canSearch={true}
        placeholder={'여행지의 이름을 검색해보세요'}
        onSubmitEditing={() => _searchByName(searchText)}
        handleChange={_handleChange}
      /> */}
      <ScreenHeader
        navigation={navigation}
        screenTitle="친환경 스팟 위치찾기"
        canGoBack={true}
      />

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
        <Marker
          draggable
          coordinate={coordinate}
          onDragEnd={e => _searchByGeoLocation(e.nativeEvent.coordinate)}>
          <OrangeMarker size="big" />
        </Marker>
      </MapView>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
