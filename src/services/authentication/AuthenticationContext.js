import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {loginRequest, registerRequest} from './AuthenticationService';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    auth().onAuthStateChanged(usr => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(() => {
        setUser(email);
        setIsLoading(false);
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
  const onLogout = async () => {
    await auth()
      .signOut()
      .then(() => {
        setUser(null);
        setError(null);
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
        onLogout,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
