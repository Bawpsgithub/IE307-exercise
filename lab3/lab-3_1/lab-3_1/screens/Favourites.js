import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites Screen</Text>
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favourites;