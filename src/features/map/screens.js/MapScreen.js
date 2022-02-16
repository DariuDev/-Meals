import React, {useContext, useEffect, useState} from 'react';
import {Map, Container} from './MapStyles';
import {SearchComponent} from '../components.js/SearchComponent';
import {LocationContext} from '../../../services/locations/LocationContext';
import {RestaurantsContext} from '../../../services/restaurants/RestaurantsContext';
import {MapCallout} from '../components.js/MapCallout';
import MapView from 'react-native-maps';

export const MapScreen = ({navigation}) => {
  const {location} = useContext(LocationContext);
  const {restaurants = []} = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const {viewport, lat, lng} = location;
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <Container>
      <SearchComponent />
      <Map
        mapType="standard"
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}>
        {restaurants.map(restaurant => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}>
              <MapView.Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetailScreen', {
                    restaurant,
                  })
                }>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </Container>
  );
};
