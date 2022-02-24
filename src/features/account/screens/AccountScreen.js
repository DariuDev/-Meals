import React from 'react';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
} from '../components/AccountStyles';

export const AccountScreen = ({navigation}) => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate('Login')}>
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
