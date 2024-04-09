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
  input: {
    flex: 1,
    height: '100%',
    paddingLeft: horizontalScale(62),
    paddingRight: horizontalScale(5),
    fontSize: verticalScale(18),
    fontFamily: ROBOTO.regular,
    color: COLORS.black,
  },
});
