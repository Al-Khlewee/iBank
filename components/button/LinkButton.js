import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors, Typography } from '../../theme'; 

const LinkButton = ({ onPress, title }) => {
  return (
    <View> 
      <Text style={styles.text} onPress={onPress}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography.caption1,
    textAlign: 'left',
    color: Colors.primary[300],
    fontFamily: 'Poppins-SemiBold',
  },
});

export default LinkButton;