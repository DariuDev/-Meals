import React, {useContext} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {RestaurantsComponent} from '../components/RestaurantsComponent';
import {ActivityIndicatorContainer} from './RestaurantStylesScreen';
import {SafeArea} from '../../../components/utility/SafeArea';
import {RestaurantsContext} from '../../../services/restaurants/RestaurantsContext';
import {SearchComponent} from '../components/SearchComponent';

export const RestaurantsScreen = ({navigation}) => {
  const {restaurants, isLoading} = useContext(RestaurantsContext);
  return (
    <SafeArea>
      {isLoading && (
        <ActivityIndicatorContainer>
          <ActivityIndicator size={50} animating={true} color={'cyan'} />
        </ActivityIndicatorContainer>
      )}
      <SearchComponent />
      <FlatList
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
