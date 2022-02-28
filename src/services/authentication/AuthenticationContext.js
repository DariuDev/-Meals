import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {loginRequest, registerRequest} from './AuthenticationService';
import {set} from 'react-native-reanimated';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(() => {
        setUser(email);
        setIsLoading(false);
        console.log(email, 'user1');
        console.log(password, 'password1');
      })
      .catch(e => {
        setError(e.toString());
        setIsLoading(false);
      });
  };
  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError('password do not match');
      return;
    }
    registerRequest(email, password, repeatedPassword)
      .then(() => {
        setUser(email);
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
        setError(e.toString());
      });
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
