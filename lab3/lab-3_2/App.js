import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { db } from './db/db';
import BottomTabStack from './navigation/BottomTabNavigator';
import { SettingsProvider } from './screens/SettingsContext';

const App = () => {
  try {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)',
      );
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS settings (id INTEGER PRIMARY KEY AUTOINCREMENT, theme INTEGER, fontsize INTEGER)',
      );
    });
  } catch (error) {
    console.log(error);
  }
// Ngô Nhật Huy - 20520541
  return (
    <SettingsProvider>
      <NavigationContainer>
        <BottomTabStack />
      </NavigationContainer>
    </SettingsProvider>
  );
};

export default App;