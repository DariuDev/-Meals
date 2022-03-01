import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {RestaurantsContextProvider} from '../../services/restaurants/RestaurantsContext';
import {LocationContextProvider} from '../../services/locations/LocationContext';
import {FavouritesContextProvider} from '../../services/favourites/FavouritesContext';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RestaurantNavigator} from './RestaurantsNavigator';
import {MapScreen} from '../../features/map/screens.js/MapScreen';
import {SettingsNavigator} from '../../infrastructre/navigation/SettingsNavigator';

const Tab = createMaterialBottomTabNavigator();

// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );
export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          activeColor="#00aea2"
          inactiveColor="#95a5a6"
          barStyle={{backgroundColor: '#ffffff'}}
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Restaurants') {
                iconName = 'md-restaurant';
              } else if (route.name === 'Map') {
                iconName = 'md-map';
              } else if (route.name === 'Settings') {
                iconName = 'md-settings';
              }
              return <Ionicons name={iconName} size={20} color={color} />;
            },
            backgroundColor: '#ffffff',
          })}>
          <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsNavigator} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);
