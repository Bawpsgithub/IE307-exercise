import { View, Text, StyleSheet, Button } from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../components/AuthContext';

const Profile = () => {
  const { setIsAuthenticated } = useContext(AuthContext);
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
// 20520541 - Ngô Nhật Huy
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="LOG OUT" onPress={handleLogout} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
  },
});

export default Profile;
