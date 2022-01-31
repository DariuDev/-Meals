import React from 'react';
import {} from 'react-native';
import {RestaurantsScreen} from './src/features/restaurants/screens/RestaurantsScreen';
import {useFonts, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';

export default function App() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  if (!oswaldLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <RestaurantsScreen />
    </ThemeProvider>
  );
}
