import React, {useContext, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {
  ActivityIndicatorContainer,
  RestaurantList,
} from './RestaurantStylesScreen';
import {SafeArea} from '../../../components/utility/SafeArea';
import {FavouritesBar} from '../../../components/favourites/FavouritesBarComponent';
import {RestaurantsContext} from '../../../services/restaurants/RestaurantsContext';
import {FavouritesContext} from '../../../services/favourites/FavouritesContext';
import {SearchComponent} from '../components/SearchComponent';

export const RestaurantsScreen = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantsContext);
  const {favourites} = useContext(FavouritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <ActivityIndicatorContainer>
          <ActivityIndicator size={50} animating={true} color={'cyan'} />
        </ActivityIndicatorContainer>
      )}
      <SearchComponent
        isFavouritesToggled={isToggled}
        onFavouritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favourites}
          onNavigate={navigation.navigate}
        />
      )}
      <RestaurantList
        data={restaurants}
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
    </SafeArea>
  );
};
