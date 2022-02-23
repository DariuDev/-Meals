import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {AppNavigator} from './AppNavigator';
import {AccountNavigator} from './AccountNavigator';
import {AuthenticationContext} from '../../services/authentication/AuthenticationContext';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
