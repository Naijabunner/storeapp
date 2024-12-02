import { StyleSheet } from 'react-native';

const typography = StyleSheet.create({
  heading1: {
    fontFamily: 'Manrope-ExtraBold', // Replace with the actual font family name
    fontSize: 40,
    fontWeight:900,
    lineHeight: 48, // 120% of fontSize
  },
  heading2: {
    fontFamily: 'Manrope-ExtraBold',
    fontSize: 32,
    fontWeight:900,
    lineHeight: 38,
  },
  heading3: {
    fontFamily: 'Manrope-Bold',
    fontSize: 24,
    lineHeight: 29,
  },
  heading4: {
    fontFamily: 'Manrope-Bold',
    fontSize: 20,
    lineHeight: 24,
  },
  heading5: {
    fontFamily: 'Manrope-Regular',
    fontSize: 18,
    lineHeight: 22,
  },
  bodyRegular: {
    fontFamily: 'Manrope-Regular',
    fontSize: 16,
    fontWeight:'regular',
    lineHeight: 19,
  },
  bodyBold: {
    fontFamily: 'Manrope-Bold',
    fontSize: 16,
    lineHeight: 19,
    fontWeight:'bold',

  },
  bodySmallRegular: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    lineHeight: 17,
  },
  bodySmallBold: {
    fontFamily: 'Manrope-Bold',
    fontSize: 14,
    lineHeight: 17,
  },
  caption: {
    fontFamily: 'Manrope-Regular',
    fontSize: 12,
    lineHeight: 14,
  },
});

export default typography;
