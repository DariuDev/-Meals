import React from 'react';
import {FlatList} from 'react-native';
import {Searchbar} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {SearchContainer} from './RestaurantStylesScreen';
import {SafeArea} from '../../../components/utility/SafeArea';

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
