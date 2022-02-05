import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import {Searchbar, ActivityIndicator} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {
  SearchContainer,
  ActivityIndicatorContainer,
} from './RestaurantStylesScreen';
import {SafeArea} from '../../../components/utility/SafeArea';
import {RestaurantsContext} from '../../../services/restaurants/RestaurantsContext';

export const RestaurantsScreen = () => {
  const {restaurants, isLoading, error} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <ActivityIndicatorContainer>
          <ActivityIndicator size={50} animating={true} color={'cyan'} />
        </ActivityIndicatorContainer>
      )}
      <SearchContainer>
        <Searchbar placeholder={'search'} />
      </SearchContainer>
      <FlatList
        data={restaurants}
        renderItem={({item}) => {
          return <RestaurantsComponent restaurant={item} />;
        }}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};
