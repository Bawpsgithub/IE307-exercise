import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet, TextInput, } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

const Login = () => {
  const navigation = useNavigation();
  const { email, setEmail, password, setPassword, loginUser, isAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    loginUser(email, password);
    if (isAuthenticated) {
      navigation.navigate('MainBottom');
    }
  };
// Ngô Nhật Huy - 20520541
  const handleOnPressSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://reactnative.dev/img/logo-og.png' }}
            style={styles.logo}
          />
        </View>
        <Text style={styles.loginText}>Welcome</Text>
        <CustomTextInput
          placeholder="Email"
          icon={'mail-outline'}
          value={email}
          handleTextChange={(text) => setEmail(text)}
        />
        <CustomTextInput
          placeholder="Password"
          icon={'lock-closed-outline'}
          value={password}
          handleTextChange={(pwd) => setPassword(pwd)}
        />

        <TouchableOpacity style={styles.forgotPwdContainer}>
          <Text style={{ color: 'red', textAlign: 'right' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton
          title="LOG IN"
          bgColor="#e67105"
          textColor="#fff"
          onPress={handleLogin}
        />

        <Text style={styles.othersLoginText}>Or login with</Text>
        <View style={styles.othersLoginContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
            }}
            style={styles.logoItem}
          />
          <Image
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png',
            }}
            style={styles.logoItem}
          />
        </View>

        <Text style={styles.isAccount}>
          Don&apos;t have an account?
          <Text style={styles.signupText} onPress={handleOnPressSignup}> Sign up here!</Text>
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
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  forgotPwdContainer: {
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  othersLoginText: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  othersLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 20,
    marginBottom: 10,
  },
  logoItem: {
    width: 50,
    height: 50,
    // marginBottom: 20,
    borderRadius: 50,
  },
  isAccount: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
  },
  signupText: {
    color: 'blue',
    fontWeight: 'bold',
  },
});
// Ngô Nhật Huy - 20520541
export default Login;