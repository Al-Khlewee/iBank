import { StyleSheet } from 'react-native';

const Colors = {
  // Primary colors
  primary: {
    100: '#F2F1F9',
    200: '#A8A3D7',
    300: '#6656B9',
    400: '#2B1C8D',
  },
  
  // Neutral colors
  neutral: {
    100: '#FFFFFF',
    200: '#E9E9E9',
    300: '#CACACA',
    400: '#989898',
    500: '#343434',
  },
  
  // Semantic colors
  semantic: {
    info: '#0090FF',
    success: '#32D88A',
    warning: '#FFAF2A',
    error: '#FF4757',
    neutral: '#F85818',
  },
};

const Typography = StyleSheet.create({
  title1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 24,
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: 28,
  },
  title2: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: '600', 
    fontStyle: 'normal',
    lineHeight: 28,
  },
  title3: {
    fontSize: 16,
    fontWeight: '600', // SemiBold
  },
  body1: {
    fontSize: 16,
    fontWeight: '500', // Medium
  },
  body2: {
    fontSize: 16,
    fontWeight: '400', // Regular
  },
  body3: {
    fontSize: 14,
    fontWeight: '500', // Medium
  },
  caption1: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
  caption2: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
});

export { Colors, Typography };