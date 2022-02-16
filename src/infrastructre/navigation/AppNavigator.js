import React from 'react';
import {Text} from 'react-native';
import {SafeArea} from '../../components/utility/SafeArea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RestaurantNavigator} from './RestaurantsNavigator';
import {MapScreen} from '../../features/map/screens.js/MapScreen';

const Tab = createMaterialBottomTabNavigator();
const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );
export const AppNavigator = () => (
  <NavigationContainer>
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
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  </NavigationContainer>
);
