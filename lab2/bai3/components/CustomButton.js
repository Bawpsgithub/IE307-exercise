import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, bgColor, textColor, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: bgColor }]} onPress={onPress}>
      <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
  },
});

export default CustomButton;