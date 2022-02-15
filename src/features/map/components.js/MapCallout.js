import React from 'react';
import {Text} from 'react-native';
import {CompactRestaurantComponent} from '../../../components/restaurant/CompactRestaurantComponent';
export const MapCallout = ({restaurant}) => {
  return <CompactRestaurantComponent restaurant={restaurant} />;
};
