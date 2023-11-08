import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
// 20520541 - Ngô Nhật Huy
const CustomButton = ({ post, style_blue, image, text, handleOnClick }) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => handleOnClick(post.id)}
    >
      <Image source={image} style={styles.buttonImage} />
      <Text style={[styles.buttonText, style_blue]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttonImage: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
});
