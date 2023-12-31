import { View, Text, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import React from 'react'; 
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();

  const handleOnPressLogin = () => {
    navigation.navigate('Login');
  };
// Ngô Nhật Huy - 20520541
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
            style={styles.logo}
          />
        </View>
        <Text style={styles.signupText}>Create New Account</Text>
        <CustomTextInput placeholder="Enter username" icon={'person-outline'} />
        <CustomTextInput placeholder="Enter email" icon={'mail-outline'} />
        <CustomTextInput placeholder="Enter password" icon={'lock-closed-outline'} />
        <CustomTextInput placeholder="Confirm password" icon={'lock-closed-outline'} />
        <CustomButton 
          title="CREATE"
          bgColor="#e67105"
          textColor="#fff"
          // onPress={handleOnPressLogin}
        />

        <Text style={styles.isAccount}>Already have an account?
          <Text style={styles.loginText} onPress={handleOnPressLogin}> Login now!</Text>
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};
// Ngô Nhật Huy - 20520541
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 5,
    borderRadius: 100,
  },
  signupText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  isAccount: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  loginText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Signup;