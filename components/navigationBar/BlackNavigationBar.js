import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Colors, Typography } from '../../theme';

const BlackNavigationBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.icon}
        resizeMode="contain"
        source={require('../../assets/icons/arrow-down-sign-to-navigate.png')}
      />
      <Text style={styles.title}>{title}</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    height: 60, 
    backgroundColor: Colors.primary[500],
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 16, // Add margin between icon and title
  },
  title: {
    ...Typography.title2,
    color: Colors.neutral[100],
    flex: 1,
  },
});

export default BlackNavigationBar;