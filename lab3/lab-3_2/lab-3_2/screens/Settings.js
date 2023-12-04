import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SettingsSwitch from './SettingsSwitch';
import { SettingsContext } from './SettingsContext';

import Slider from '@react-native-community/slider';
// Ngô Nhật Huy - 20520541
const Settings = () => {
  const { darkMode, updateDarkMode, fontSize, updateFontSize } = useContext(SettingsContext);

  const handleDarkModeToggle = () => {
    updateDarkMode(!darkMode);
  };

  const handleFontSizeChange = (newFontSizeValue) => {
    updateFontSize(newFontSizeValue);
  };

  const fontSizeValue = fontSize !== null ? fontSize : 18;

  return (
    <View style={[styles.container, darkMode && styles.darkContainer]}>
      <SettingsSwitch
        label="Dark Mode"
        value={darkMode}
        onValueChange={handleDarkModeToggle}
        darkMode={darkMode}
        fontSize={fontSize}
      />

      <View style={styles.fontSettingsContainer}>
        <Text style={[styles.fontSizeText, { fontSize: fontSizeValue, color: darkMode ? 'white' : 'black' }]}>Font Size</Text>
        <Text style={[styles.fontSizeValue, { fontSize: fontSizeValue, color: darkMode ? 'white' : 'black' }]}>{fontSize}</Text>
      </View>

      <Slider
        value={fontSize}
        onValueChange={handleFontSizeChange}
        step={2}
        style={[styles.fontPickerContainer, { borderColor: darkMode ? 'white' : 'black' }]}
        minimumValue={12}
        maximumValue={36}
        minimumTrackTintColor="#06b6d4"
        maximumTrackTintColor="#cbd5e1"
      />
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  fontSettingsContainer: {
    flexDirection: 'row',
    marginHorizontal: 12,
    marginBottom: 6,
    justifyContent: 'space-between',
  },
  fontSizeText: {
    fontWeight: 'bold',
  },
  fontSizeValue: {
    fontWeight: 'bold',
  },
  fontPickerContainer: {
    width: '80%',
    alignSelf: 'center',
  },
  darkContainer: {
    backgroundColor: 'black',
  },
});

export default Settings;
