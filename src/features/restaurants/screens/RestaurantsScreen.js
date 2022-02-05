import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {SearchContainer} from './RestaurantStylesScreen';
import {SafeArea} from '../../../components/utility/SafeArea';
import {RestaurantsContext} from '../../../services/restaurants/RestaurantsContext';

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantsContext);
  console.log(restaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder={'search'} />
      </SearchContainer>
      <FlatList
        data={restaurantContext.restaurants}
        renderItem={() => <RestaurantsComponent />}
      />
    </SafeArea>
  );
};
