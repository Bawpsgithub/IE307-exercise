import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const SettingsSwitch = ({ label, value, onValueChange, darkMode, fontSize }) => {
  const containerStyle = [styles.switchContainer, { backgroundColor: darkMode ? 'black' : 'white' }];
  const labelStyle = [styles.label, { fontSize: fontSize, color: darkMode ? 'white' : 'black' }];

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={darkMode ? '#008374' : '#A9A9A9'}
        trackColor={{ false: '#A9A9A9', true: '#008374' }}
      />
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    marginVertical: 6,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
  },
});

export default SettingsSwitch;
