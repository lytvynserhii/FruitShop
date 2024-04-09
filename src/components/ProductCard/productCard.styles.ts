import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT, ROBOTO } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    height: verticalScale(167),
    width: verticalScale(167),
    borderRadius: 10,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.25,
    elevation: 5,
  },
  image: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: verticalScale(5),
  },
  title: {
    fontFamily: MONTSERRAT.medium,
    fontSize: verticalScale(15),
    color: COLORS.black,
  },
  price: {
    marginTop: verticalScale(5),
    fontFamily: ROBOTO.light,
    fontSize: verticalScale(12),
    color: COLORS.black,
  },
});
