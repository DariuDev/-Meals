import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/RestaurantsContext';
import {LocationContextProvider} from './src/services/locations/LocationContext';
import {Navigation} from './src/infrastructre/navigation/Index';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Navigation />
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
