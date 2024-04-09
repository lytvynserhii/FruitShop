import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  defaultWrapperStyles: {
    marginBottom: verticalScale(19),
  },
  label: {
    fontFamily: MONTSERRAT.medium,
    fontSize: verticalScale(20),
    color: COLORS.yellow,
  },
});
