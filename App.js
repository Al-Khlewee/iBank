import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Typography, Colors } from './theme';
import Illustration from "./components/Illustration";
import DefaultTextField from "./components/textField/DefaultTextField";
import DefaultTextFieldIconRight from "./components/textField/DefaultTextFieldIconRight";
import Fingerprint from "./components/icons/Fingerprint";
import DisabledPrimaryButton from "./components/button/DisabledPrimaryButton";
import BlackNavigationBar from "./components/navigationBar/BlackNavigationBar";
import { StatusBar } from 'expo-status-bar';
import LinkButton from "./components/button/LinkButton";

const SignIn = () => {
  return (
    <View style={styles.signIn}>
      <BlackNavigationBar title="Sign in" />

      <View style={styles.formContainer}>
        <Text style={styles.welcomeBack}>Welcome Back</Text>
        <Text style={styles.helloThereSign}>Hello there, sign in to continue</Text>

        <View style={styles.illustrationContainer}>
          <Illustration style={styles.illustration} />
        </View>

        <DefaultTextField style={styles.defaultTextField} placeholder="Text input" />

        <DefaultTextFieldIconRight
          style={styles.defaultTextFieldIconRight}
          placeholder="Password"
          iconSource={require('./assets/icons/down-arrow2.png')}
        />

        <Text style={styles.forgotYourPassword}>Forgot your password ?</Text>

        <DisabledPrimaryButton style={styles.disabledPrimaryButton} title="Sign in" />

        <View style={styles.fingerprintContaniner}>
          <Fingerprint style={styles.fingerprint} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.text}>Don't have an account? </Text>
          <LinkButton title="Sign Up" />
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3629b7",
  },
  formContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginTop: 15,
    justifyContent: 'space-around', // Distribute space evenly 
  },
  welcomeBack: {
    alignSelf: "flex-start",
    ...Typography.title1,
    color: Colors.primary[400],
  },
  helloThereSign: {
    alignSelf: "flex-start",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    color: Colors.neutral[500],
  },
  illustrationContainer: {
    alignItems: "center",
  },
  fingerprintContaniner: {
    alignItems: 'center',
  },
  illustration: {
    // No need for alignItems here
  },
  defaultTextField: {
    width: "100%",
  },
  defaultTextFieldIconRight: {
    width: "100%",
  },
  forgotYourPassword: {
    alignSelf: "flex-end",
    color: "#cacaca",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 16,
    fontSize: 12,
  },
  disabledPrimaryButton: {
    alignSelf: "center",
    width: "100%",
  },
  fingerprint: {
    alignSelf: 'center',
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Regular",
    color: "#343434",
    fontSize: 12,
  },
});

export default SignIn;