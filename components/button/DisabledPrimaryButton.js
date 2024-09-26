import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../theme';

const DisabledPrimaryButton = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
  },
  background: {
    backgroundColor: Colors.primary[100],
    borderRadius: 15,
    height: '100%',
    position: 'absolute',
    width: '100%',
  },
  text: {
    top: '22.73%',
    left: '41.84%',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    color: Colors.neutral[100],
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    position: 'absolute',
  },
});

export default DisabledPrimaryButton;