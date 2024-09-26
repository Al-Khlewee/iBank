import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../theme';

const DefaultTextFieldIconRight = ({ value, placeholder, iconSource }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} resizeMode="cover" source={iconSource} />
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
  icon: {
    width: 16,
    top: 14,
    right: 15,
    height: 16,
    position: 'absolute',
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
    top: '27.27%',
    left: '3.67%',
    lineHeight: 21,
    fontSize: 14,
    color: Colors.neutral[300],
    fontStyle: Typography.body3,
    textAlign: 'left',
    position: 'absolute',
  },
  inputText: {
    // ... styles for displaying the actual input value if needed
  }
});

export default DefaultTextFieldIconRight;