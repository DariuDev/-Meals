import React, {useState, createContext} from 'react';
import auth from '@react-native-firebase/auth';
import {loginRequest} from './AuthenticationService';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onLogin = async (email, password) => {
    setIsLoading(true);
    await loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsLoading(false);
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
