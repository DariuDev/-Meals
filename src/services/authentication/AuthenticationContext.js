import React, {useState, createContext, useContext, useEffect} from 'react';
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
        console.log('onAuthStateChanged', usr);
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
  const onLogout = async () => {
    setUser(null);
    await auth().signOut();
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
