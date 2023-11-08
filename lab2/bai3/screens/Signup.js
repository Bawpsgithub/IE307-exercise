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
// 20520541 - Ngô Nhật Huy
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
        <CustomTextInput placeholder="Enter username" icon={require('../assets/user.png')} />
        <CustomTextInput placeholder="Enter email" icon={require('../assets/email.png')} />
        <CustomTextInput
          placeholder="Enter password"
          icon={require('../assets/password.png')}
        />
        <CustomTextInput
          placeholder="Confirm password"
          icon={require('../assets/password.png')}
        />
        <CustomButton
          title="CREATE"
          bgColor="#E67205"
          textColor="#fff"
        />

        <Text style={styles.isAccount}>Already have an account?
          <Text style={styles.loginText} onPress={handleOnPressLogin}> Login now!</Text>
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 35,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  signupText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  isAccount: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  loginText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default Signup;