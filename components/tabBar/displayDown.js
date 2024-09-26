import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Colors } from '../../theme';

const DisplayDownTabBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '4.19%',
    top: '95.81%',
    bottom: '0%',
    left: '0%',
    right: '0%',
    position: 'absolute',
    width: '100%',
  },
  indicator: {
    marginLeft: -66.5,
    bottom: 9,
    borderRadius: 100,
    backgroundColor: Colors.neutral[300],
    width: 134,
    height: 5,
    left: '50%',
    position: 'absolute',
  },
});

export default DisplayDownTabBar;