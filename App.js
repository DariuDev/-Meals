import React from 'react';
import {} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
