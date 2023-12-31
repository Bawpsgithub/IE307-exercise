import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Note from '../screens/Note';
import AddNote from '../screens/AddNote';
import EditNote from '../screens/EditNote';
import { SettingsContext } from '../screens/SettingsContext';

const Stack = createStackNavigator();
// Ngô Nhật Huy - 20520541
const getHeaderOptions = (darkMode) => ({
  headerStyle: {
    backgroundColor: darkMode ? '#333' : '#fff',
  },
  headerTintColor: darkMode ? '#fff' : '#000',
});

const HomeStack = () => {
  const { darkMode } = useContext(SettingsContext);
  const headerOptions = getHeaderOptions(darkMode);

  return (
    <Stack.Navigator initialRouteName='Note' screenOptions={headerOptions}>
      <Stack.Screen name="Note" component={Note} options={{ headerShown: false }} />
      <Stack.Screen name="AddNote" component={AddNote} options={headerOptions} />
      <Stack.Screen name="EditNote" component={EditNote} options={headerOptions} />
    </Stack.Navigator>
  );
};

export default HomeStack;
