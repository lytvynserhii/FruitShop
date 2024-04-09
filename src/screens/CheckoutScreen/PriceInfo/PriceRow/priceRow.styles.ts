import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  defaultText: {
    fontFamily: MONTSERRAT.medium,
    fontSize: verticalScale(18),
    color: COLORS.black,
  },
});
