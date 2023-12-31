import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const handleDetails = () => {
    navigation.navigate('HomeDetails');
  }

  return (    
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={handleDetails} />
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

export default Home;