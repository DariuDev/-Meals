import React, {useEffect, useState} from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './src/infrastructre/theme';
import {RestaurantsContextProvider} from './src/services/restaurants/RestaurantsContext';
import {LocationContextProvider} from './src/services/locations/LocationContext';
import {FavouritesContextProvider} from './src/services/favourites/FavouritesContext';
//import {AuthenticationContextProvider} from './src/services/AthenticationContext/Ath';
import {Navigation} from './src/infrastructre/navigation/Index';
import 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';

export default function App() {
  useEffect(() => {
    auth()
      .createUserWithEmailAndPassword(
        'jane.doe@example.com',
        'SuperSecretPassword!',
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
        console.error(error);
      });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </ThemeProvider>
  );
}
