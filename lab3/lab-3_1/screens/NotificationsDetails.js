import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationsDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Notifications Details Screen</Text>
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

export default NotificationsDetails;