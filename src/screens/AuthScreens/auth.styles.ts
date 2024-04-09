import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { ROBOTO } from 'constants/fonts';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: horizontalScale(30),
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    flex: 2,
  },
  footer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputWrapper: {
    gap: verticalScale(36),
  },
  forgotButton: {
    alignItems: 'center',
    marginTop: verticalScale(28),
  },
  forgotButtonLabel: {
    fontSize: verticalScale(15),
    fontFamily: ROBOTO.medium,
    color: COLORS.lightGrey,
  },
});
