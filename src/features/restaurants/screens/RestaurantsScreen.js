import React from 'react';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {SafeArea, SearchContainer} from './RestaurantStylesScreen';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder={'search'} />
      </SearchContainer>
      <FlatList
        data={[{name: 1}, {name: 2}, {name: 3}]}
        renderItem={() => <RestaurantsComponent />}
      />
    </SafeArea>
  );
};
