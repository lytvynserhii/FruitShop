import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { ROBOTO } from 'constants/fonts';
import { DEVICE_WIDTH, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    width: DEVICE_WIDTH,
    alignItems: 'center',
    paddingTop: verticalScale(77),
    gap: verticalScale(32),
  },
  body: {
    gap: verticalScale(99),
  },
  image: {
    height: verticalScale(265),
    width: verticalScale(265),
  },
  subtitle: {
    maxWidth: 160,
    fontFamily: ROBOTO.regular,
    fontSize: verticalScale(15),
    textAlign: 'center',
    color: COLORS.black,
  },
});
