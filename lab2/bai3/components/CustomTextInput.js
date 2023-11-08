import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const CustomTextInput = ({ placeholder, icon, value, handleTextChange }) => {
  return (
    <View style={styles.inputContainer}>
      <Image source={icon} style={styles.icon} />
      <TextInput 
        style={styles.input} 
        placeholder={placeholder}
        value={value}
        onChangeText={handleTextChange} />
    </View>
  );
};
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    paddingBottom: 5,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginLeft: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default CustomTextInput;