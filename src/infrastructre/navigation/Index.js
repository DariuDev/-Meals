import React, {useContext} from 'react';
import {AppNavigator} from './AppNavigator';
import {AccountNavigator} from './AccountNavigator';
import {AuthenticationContext} from '../../services/authentication/AuthenticationContext';
import {NavigationContainer} from '@react-navigation/native';

export const Navigation = () => {
  const {isAuthenticated} = useContext(AuthenticationContext);
  console.log(isAuthenticated, 'isAuth');
  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
