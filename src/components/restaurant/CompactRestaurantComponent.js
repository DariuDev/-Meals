import React from 'react';
import {Text, Platform} from 'react-native';
import {CompactImage, Item, CompactWebview} from './CompactStyle';

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantComponent = ({restaurant, isMap}) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;
  return (
    <Item>
      <Image source={{uri: restaurant.photos[0]}} />
      <Text>{restaurant.name}</Text>
    </Item>
  );
};
