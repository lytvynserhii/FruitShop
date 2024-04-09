import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { MONTSERRAT } from 'constants/fonts';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    margin: 3,
    color: COLORS.darkBlue,
    fontFamily: MONTSERRAT.semiBold,
    fontSize: verticalScale(20),
  },
  profile: {
    marginBottom: 2,
  },
});
