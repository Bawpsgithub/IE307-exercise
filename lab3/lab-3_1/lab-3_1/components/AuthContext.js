import React, { createContext, useState } from 'react';
import { Alert } from 'react-native';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
// Ngô Nhật Huy - 20520541
  const loginUser = (enteredEmail, enteredPassword) => {
    if (enteredEmail === '20520541@gm.uit.edu.vn' && enteredPassword === 'ngonhathuy') {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      Alert.alert("Incorrect email or password.");
    }
  };

  const logoutUser = () => {
    setIsAuthenticated(false);
  };

  const contextValue = {
    isAuthenticated,
    setIsAuthenticated,
    email,
    setEmail,
    password,
    setPassword,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };