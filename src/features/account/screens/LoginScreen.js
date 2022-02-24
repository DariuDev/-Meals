import React, {useContext, useState} from 'react';
import {Text} from 'react-native';
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  AuthButton,
} from '../components/AccountStyles';
import {AuthenticationContext} from '../../../services/authentication/AuthenticationContext';

export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {onLogin, error} = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthInput
          label="Email"
          value={email}
          textcontentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={u => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textcontentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={p => setPassword(p)}
        />
        {error && <Text>{error}</Text>}
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => onLogin(email, password)}>
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};
