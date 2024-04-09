import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  title: {
    fontFamily: MONTSERRAT.bold,
    fontSize: verticalScale(22),
    color: COLORS.yellow,
  },
});
