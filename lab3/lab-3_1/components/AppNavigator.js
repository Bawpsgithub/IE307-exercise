import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainDrawer from './MainDrawer';
import AuthStack from './AuthStack';
import { AuthContext, AuthProvider } from './screens/AuthContext';
// Ngô Nhật Huy - 20520541
const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated
          ? (
            <Stack.Screen name="MainDrawer" component={MainDrawer} options={{ headerShown: false }} />
          )
          : (
            <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;