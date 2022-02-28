import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';
import {AuthenticationContextProvider} from './src/services/authentication/AuthenticationContext';
import {Navigation} from './src/infrastructre/navigation/Index';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
