import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Notifications = () => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('NotificationsDetailsScreen');
  }

  return (
    <View style={styles.container}>
      <Text>Notifications Screen</Text>
      <Button title="Go to Details" onPress={handleDetails} />
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

export default Notifications;