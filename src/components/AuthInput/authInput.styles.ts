import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT, ROBOTO } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

const AUTH_INPUT_HEIGHT = verticalScale(66);

export const styles = StyleSheet.create({
  input: {
    height: AUTH_INPUT_HEIGHT,
    paddingHorizontal: horizontalScale(42),
    fontSize: verticalScale(20),
    fontFamily: MONTSERRAT.medium,
    backgroundColor: COLORS.greyWithOpacity,
    borderRadius: 30,
    color: COLORS.black,
  },
  subtitle: {
    position: 'absolute',
    top: AUTH_INPUT_HEIGHT + 2,
    left: horizontalScale(14),
    color: COLORS.yellow,
    fontFamily: ROBOTO.regular,
    fontSize: verticalScale(14),
  },
});
