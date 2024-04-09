import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { ROBOTO } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    backgroundColor: COLORS.lightGreyWithOpacity,
    borderRadius: 20,
  },
  value: {
    fontFamily: ROBOTO.regular,
    fontSize: verticalScale(15),
    color: COLORS.yellow,
  },
});
