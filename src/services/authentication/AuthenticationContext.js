import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {loginRequest} from './AuthenticationService';

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
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
