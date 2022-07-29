import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import MapView, {Marker} from 'react-native-maps';
import font from '../../styles/font';
import layout, {HEADER_HEIGHT} from '../../styles/layout';
export default class Map extends Component {
  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 39, longitude: -122}} />
      </MapView>
    );
  }
}
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: layout.window.height - HEADER_HEIGHT - 100,
  },
});
