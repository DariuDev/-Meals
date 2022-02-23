import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AccountScreen} from '../../features/account/screens/AccountScreen';
import {LoginScreen} from '../../features/account/screens/LoginScreen';
import {RegisterScreen} from '../../features/account/screens/RegisterScreen';

const AccountStack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <AccountStack.Navigator headerMode="false">
      <AccountStack.Screen name="Main" component={AccountScreen} />
      <AccountStack.Screen name="Login" component={LoginScreen} />
      <AccountStack.Screen name="Register" component={RegisterScreen} />
    </AccountStack.Navigator>
  );
};
