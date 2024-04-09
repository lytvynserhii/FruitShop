import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const defaultStyles = StyleSheet.create({
  container: {
    height: verticalScale(66),
    backgroundColor: COLORS.yellow,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: COLORS.white,
    fontSize: verticalScale(25),
    fontFamily: MONTSERRAT.bold,
  },
});

const mediumButton = {
  container: {
    height: verticalScale(60),
  },
  label: {
    fontSize: verticalScale(18),
  },
};

const largeButton = {
  container: {
    height: verticalScale(66),
  },
  label: {
    fontSize: verticalScale(25),
  },
};

export const buttonSize = {
  medium: mediumButton,
  large: largeButton,
};
