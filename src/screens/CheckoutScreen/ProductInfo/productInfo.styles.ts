import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { ROBOTO } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(60),
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  label: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: horizontalScale(12),
  },
  text: {
    fontFamily: ROBOTO.regular,
    fontSize: verticalScale(15),
    color: COLORS.black,
  },
  image: {
    height: verticalScale(82),
    width: verticalScale(82),
  },
});
