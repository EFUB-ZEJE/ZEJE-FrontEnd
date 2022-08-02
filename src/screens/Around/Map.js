import {Text, View, StyleSheet} from 'react-native';
import React, {Component, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
export default class Map extends Component {
  //const [modalVisible, setModalVisible] = useState(true);
  //const numOfNearSpots = 0; // 현재 위치와 가까운 스팟 목록
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          // 제주도 위치
          latitude: 33.38825,
          longitude: 126.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}></MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    width: '100%',

    height: layout.window.height - HEADER_HEIGHT,
  },
});
