import React, { useContext } from 'react';
import { AuthProvider } from './screens/AuthContext';
import AppNavigator from './AppNavigator';

const App = () => {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};
// Ngô Nhật Huy - 20520541
export default App;