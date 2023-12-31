import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';
import HomeStack from './HomeStack';
import Settings from '../screens/Settings';
import { SettingsContext } from '../screens/SettingsContext';

const Bottom = createBottomTabNavigator();

const BottomTabIcon = ({ focused, darkMode, name }) => {
  return <IonIcon name={name} size={25} color={focused ? '#368EFE' : (darkMode ? 'white' : 'black')} />;
};
// Ngô Nhật Huy - 20520541
const getTabOptions = (title, headerShown, name, darkMode) => {
  return {
    title: title,
    headerShown: headerShown,
    headerStyle: {
      backgroundColor: darkMode ? '#333' : '#FFF',
    },
    headerTintColor: darkMode ? '#FFF' : '#000',
    tabBarIcon: ({ focused }) => <BottomTabIcon name={name} focused={focused} darkMode={darkMode} />,
  };
};

const BottomTabStack = () => {
  const { darkMode } = useContext(SettingsContext);

  return (
    <Bottom.Navigator screenOptions={{
      tabBarActiveBackgroundColor: darkMode ? 'black' : 'white',
      tabBarInactiveBackgroundColor: darkMode ? 'black' : 'white',
      tabBarLabelStyle: { fontSize: 13 },
    }}>
      <Bottom.Screen
        name="Home"
        options={getTabOptions('Home', false, 'home', darkMode)}
        component={HomeStack}
      />
      <Bottom.Screen
        name="Setting"
        options={getTabOptions('Setting', true, 'settings', darkMode)}
        component={Settings}
      />
    </Bottom.Navigator>
  );
};

export default BottomTabStack;
