import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Colors, Typography } from './theme'; // Adjust path if needed
import FingerprintIcon from './components/FingerprintIcon';
import Illustration from './components/Illustration';
import LinkButton from './components/Button/Link';
import DisabledPrimaryButton from './components/Button/Primary/Disabled';
import BlackNavigationBar from './components/NavigationBar/Black';
import DisplayDownTabBar from './components/System/TabBar/DisplayDown';
import DefaultTextField from './components/TextField/Default';
import DefaultTextFieldIconRight from './components/TextField/Default-IconRight';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background} /> 
      <BlackNavigationBar title="Sign in" /> 
      <Text style={styles.welcomeBack}>Welcome Back</Text>
      <Text style={styles.helloThere}>Hello there, sign in to continue</Text>
      <Illustration /> 
      <DefaultTextField placeholder="Text input" />
      <DefaultTextFieldIconRight 
        placeholder="Password" 
        iconSource={require('./assets/Icons/down-arrow2.png')} 
      />
      <Text style={styles.forgotPassword}>Forgot your password ?</Text>
      <DisabledPrimaryButton title="Sign in" />
      <FingerprintIcon />
      <Text style={styles.dontHaveAccount}>Don't have an account? </Text>
      <LinkButton title="Sign Up" /> 
      <DisplayDownTabBar />
      <Image style={styles.systemStatusbarsWhite} resizeMode="cover" source={require('./assets/Images/System / StatusBars / White.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 812,
    overflow: 'hidden',
    width: '100%',
    backgroundColor: Colors.primary[300], 
  },
  background: {
    height: '86.7%',
    top: '13.3%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: Colors.neutral[100],
    bottom: '0%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  welcomeBack: {
    top: '16.26%',
    fontSize: 24,
    color: Colors.primary[300],
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    fontWeight: '600',
    lineHeight: 28,
    left: '6.4%',
    position: 'absolute',
  },
  helloThere: {
    top: '20.2%',
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    position: 'absolute',
    left: '6.4%',
    color: Colors.neutral[500],
    lineHeight: 16,
    fontSize: 12,
    textAlign: 'left',
  },
  forgotPassword: {
    top: '65.15%',
    left: '55.2%',
    color: Colors.neutral[300],
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    lineHeight: 16,
    fontSize: 12,
    textAlign: 'left',
    position: 'absolute',
  },
  dontHaveAccount: {
    top: '91.26%',
    left: '23.47%',
    fontFamily: 'Poppins-Regular',
    color: Colors.neutral[500],
    lineHeight: 16,
    fontSize: 12,
    textAlign: 'left',
    position: 'absolute',
  },
  systemStatusbarsWhite: {
    height: '4.93%',
    bottom: '95.07%',
    top: '0%',
    maxHeight: '100%',
    maxWidth: '100%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    overflow: 'hidden',
    width: '100%',
  },
});

export default SignIn;