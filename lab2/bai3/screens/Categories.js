import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Categories = () => {
  return (
    <View style={styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
};
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Categories;