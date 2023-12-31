import { View, Text, StyleSheet, Button } from 'react-native'; 
import React, { useContext } from 'react'; 
import { AuthContext } from './AuthContext';

const Profile = () => {
  const { setIsAuthenticated } = useContext (AuthContext);
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
      <Button title="Log out" onPress={handleLogout} />
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

export default Profile;