import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { ROBOTO } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(48),
    paddingRight: horizontalScale(19),
    borderRadius: 24,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    elevation: 10,
  },
  label: {
    flex: 1,
    paddingLeft: horizontalScale(62),
    fontFamily: ROBOTO.regular,
    fontSize: verticalScale(18),
    color: COLORS.lightGrey,
  },
});
