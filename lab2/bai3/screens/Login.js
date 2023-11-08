import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../components/AuthContext';
// 20520541 - Ngô Nhật Huy
const Login = () => {
  const navigation = useNavigation();
  const { email, setEmail, password, setPassword, loginUser, isAuthenticated } = useContext(AuthContext);

  const handleLogin = () => {
    loginUser(email, password);
    if (isAuthenticated) {
      navigation.navigate('MainBottom');
    }
  };

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
          // style={styles.textInput}
          placeholder="Email"
          icon={require('../assets/email.png')}
          value={email}
          handleTextChange={(text) => setEmail(text)}
        />
        <CustomTextInput
          // style={styles.textInput}
          placeholder="Password"
          icon={require('../assets/password.png')}
          value={password}
          handleTextChange={(pwd) => setPassword(pwd)}
        />

        <TouchableOpacity style={styles.forgotPwdContainer}>
          <Text style={{ color: '#FE5489', textAlign: 'right' }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
        <CustomButton
          title="LOG IN"
          bgColor="#e67105"
          textColor="#fff"
          onPress={handleLogin}
        />

        <Text style={styles.othersLogin}>Or login with</Text>
        <View style={styles.othersLoginContainer}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png',
            }}
            style={styles.logoItem}
          />
          <Image
            source={{
              uri: 'https://image.similarpng.com/very-thumbnail/2020/06/Logo-google-icon-PNG.png',
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
// 20520541 - Ngô Nhật Huy
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 100,
  },
  loginText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  forgotPwdContainer: {
    alignItems: 'flex-end',
    marginBottom: 5,
    
  },
  othersLogin: {
    marginTop: 20,
    marginBottom: 20,
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

export default Login;
