import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { horizontalScale, verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(30),
    paddingBottom: verticalScale(48),
    paddingTop: verticalScale(44),
  },
  footer: {
    gap: verticalScale(44),
  },
});
