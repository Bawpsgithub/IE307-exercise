import React, {useState} from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// 20520541 - Ngô Nhật Huy
const Logo = ({ darkMode }) => {

  return (
    <View style = { styles.Container }>
      <Image
        style = {styles.logo}
        source = {{uri: 'https://reactnative.dev/img/logo-og.png'}}
      />
      <Text style={[styles.title, darkMode]}>React Native App</Text>
    </View>
  );
}

export default Logo;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    paddingTop: 10,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});