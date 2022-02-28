import React, {useContext} from 'react';
import {Text, Button} from 'react-native';
import {SafeArea} from '../../components/utility/SafeArea';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {RestaurantNavigator} from './RestaurantsNavigator';
import {MapScreen} from '../../features/map/screens.js/MapScreen';

import {AuthenticationContext} from '../../services/authentication/AuthenticationContext';

const Tab = createMaterialBottomTabNavigator();

const Settings = () => {
  const {onLogout} = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};
// const Map = () => (
//   <SafeArea>
//     <Text>Map</Text>
//   </SafeArea>
// );
export const AppNavigator = () => (
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
);
