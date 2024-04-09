import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  text: {
    fontFamily: MONTSERRAT.bold,
    fontSize: verticalScale(25),
    textAlign: 'center',
    color: COLORS.black,
  },
});
