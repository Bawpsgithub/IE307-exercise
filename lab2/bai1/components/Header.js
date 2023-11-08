import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
// 20520541 - Ngô Nhật Huy
export default function Header() {
  return (
    <View style = {styles.header}>
      <Text style = {styles.headerText}>Social Media</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0088ff',
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});