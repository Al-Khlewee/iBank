import React from 'react';
import { Image, StyleSheet } from 'react-native';

const FingerprintIcon = () => {
  return (
    <Image
      style={styles.icon}
      resizeMode="contain"
      source={require('../../assets/icons/Fingerprint4.png')}
    />
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 64, // Set a fixed width (adjust as needed)
    height: 64, // Set a fixed height (adjust as needed)
    
  },
});

export default FingerprintIcon;