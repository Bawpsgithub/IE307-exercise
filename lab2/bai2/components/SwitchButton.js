import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
// 20520541 - Ngô Nhật Huy
const SwitchButton = ({ text, value, onValueChange, darkMode }) => {

  return (
    <View style = { styles.SwitchButton }>
      <Text style={darkMode}>{text}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

export default SwitchButton;
const styles = StyleSheet.create({
  SwitchButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});