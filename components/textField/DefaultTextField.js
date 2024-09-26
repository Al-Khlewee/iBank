import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../theme';

const DefaultTextField = ({ value, placeholder }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background} />
      <Text style={styles.placeholderText}>{placeholder}</Text>
      <Text style={styles.inputText}>{value}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
  },
  background: {
    borderStyle: 'solid',
    borderColor: Colors.neutral[300],
    borderWidth: 1,
    borderRadius: 15,
    height: '100%',
    top: '0%',
    left: '0%',
    bottom: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  placeholderText: {
    marginTop: -10,
    left: 12,
    top: '50%',
    fontStyle: Typography.body3,
    color: Colors.neutral[300],
    textAlign: 'left',
    position: 'absolute',
  },
  inputText: {
    // ... styles for displaying the actual input value if needed
  }
});

export default DefaultTextField;