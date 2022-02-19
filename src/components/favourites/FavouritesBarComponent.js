import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {CompactRestaurantComponent} from '../restaurant/CompactRestaurantComponent';
import {
  FavouritesWrapper,
  ScrollViewItems,
} from './FavouritesBarStyleComponent';

export const FavouritesBar = ({favourites, onNavigate}) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Text>Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name;
          return (
            <ScrollViewItems key={key}>
              <TouchableOpacity
                onPress={() =>
                  onNavigate('RestaurantDetailScreen', {restaurant})
                }>
                <CompactRestaurantComponent restaurant={restaurant} />
              </TouchableOpacity>
            </ScrollViewItems>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
