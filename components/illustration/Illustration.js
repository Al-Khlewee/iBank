import React from 'react';
import { Image, StyleSheet } from 'react-native';

const Illustration = () => {
  return (
    <Image
      style={styles.illustration}
      resizeMode="cover"
      source={require('./assets/images/Illustration.png')}
    />
  );
};

const styles = StyleSheet.create({
  illustration: {
    alignItems: "center",
  }
});

export default Illustration;