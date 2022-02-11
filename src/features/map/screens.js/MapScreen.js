import React from 'react';
import {Map, PROVIDER_GOOGLE} from './MapStyles';
import MapView from 'react-native-maps';

export const MapScreen = () => (
  <Map
    style={{height: '100%'}}
    showsUserLocation={true}
    provider={PROVIDER_GOOGLE}
    zoomEnabled={true}
    mapType="standard"
    initialRegion={{
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  />
);
