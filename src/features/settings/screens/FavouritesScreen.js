import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {NoFavouritesArea, FavouritesArea} from './FavouritesStyleScreen';
import {FavouritesContext} from '../../../services/favourites/FavouritesContext';
import {RestaurantList} from '../../restaurants/screens/RestaurantStylesScreen';
import {RestaurantsComponent} from '../../restaurants/components/RestaurantsComponent';

export const FavouritesScreen = ({navigation}) => {
  const {favourites} = useContext(FavouritesContext);
  return favourites.length ? (
    <FavouritesArea>
      <RestaurantList
        data={favourites}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RestaurantDetailScreen', {
                  restaurant: item,
                })
              }>
              <RestaurantsComponent restaurant={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={item => item.name}
      />
    </FavouritesArea>
  ) : (
    <NoFavouritesArea>
      <Text>No Favourites Yet</Text>
    </NoFavouritesArea>
  );
};
