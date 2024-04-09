import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT, ROBOTO } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(30),
  },
  imageWrapper: {
    width: verticalScale(258),
    height: verticalScale(258),
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
    width: '100%',
    height: '100%',
  },
  name: {
    marginTop: verticalScale(18),
    marginBottom: verticalScale(21),
    fontFamily: MONTSERRAT.medium,
    fontSize: verticalScale(15),
    color: COLORS.black,
  },
  price: {
    marginTop: verticalScale(30),
    fontFamily: ROBOTO.bold,
    fontSize: verticalScale(32),
    color: COLORS.yellow,
  },
  actionButton: {
    marginHorizontal: horizontalScale(30),
    marginBottom: verticalScale(48),
  },
});
