import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    paddingHorizontal: horizontalScale(20),
    flex: 1,
  },
  headerWrapper: {
    paddingHorizontal: horizontalScale(10),
  },
  input: {
    marginTop: verticalScale(19),
    zIndex: 1,
  },
  list: {
    marginTop: verticalScale(31),
  },
  listContainer: {
    gap: verticalScale(22),
    paddingHorizontal: horizontalScale(10),
    paddingBottom: verticalScale(10),
  },
  title: {
    marginBottom: verticalScale(11),
    fontFamily: MONTSERRAT.semiBold,
    fontSize: verticalScale(17),
    color: COLORS.black,
  },
});
