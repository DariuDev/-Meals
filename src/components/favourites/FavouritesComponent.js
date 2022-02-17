import React, {useContext} from 'react';
import {FavouritesContext} from '../../services/favourites/FavouritesContext';
import Ionicons from 'react-native-vector-icons/AntDesign';
import {FavouriteButton} from './FavouritesStyleComponent';

export const Favourites = ({restaurant}) => {
  const {favourites, addToFavourites, removeFromFavourites} =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }>
      <Ionicons
        name={isFavourite ? 'heart' : 'hearto'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
