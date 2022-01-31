import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder={'search'} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantsComponent />
      </RestaurantListContainer>
    </SafeArea>
  );
};
const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;
const SearchContainer = styled(View)`
  margin: 2%;
`;
const RestaurantListContainer = styled(View)`
  flex: 1;
`;
