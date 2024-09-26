import React from 'react';
import { Image, StyleSheet } from 'react-native';
const Illustration = () => {
  return (
    <Image
      style={styles.illustration}
      resizeMode="cover"
      source={require('../assets/images/Illustration4.png')}
    />
  );
};

const styles = StyleSheet.create({
  illustration: {
    width: 213,
    height: 165,
  },
});

export default Illustration;