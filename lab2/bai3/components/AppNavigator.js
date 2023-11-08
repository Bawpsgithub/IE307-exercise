import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from './NavBar';
import AuthStack from './AuthStack';
import { AuthContext } from './AuthContext';
// 20520541 - Ngô Nhật Huy
const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated
          ? (
            <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} />
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