import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categories1 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories1</Text>
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const Categories2 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories2</Text>
    </View>
  );
};

const Categories3 = () => {
  return (
    <View style={styles.container}>
      <Text>Categories3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default { Categories1, Categories2, Categories3 };