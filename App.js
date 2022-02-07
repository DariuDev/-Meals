import React from 'react';
import {Text} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {SafeArea} from './src/components/utility/SafeArea';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantsContextProvider} from './src/services/restaurants/RestaurantsContext';
import {LocationContextProvider} from './src/services/locations/LocationContext';

const Tab = createMaterialBottomTabNavigator();

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
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
              <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </NavigationContainer>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
