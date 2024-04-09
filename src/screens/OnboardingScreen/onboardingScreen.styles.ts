import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  body: {
    gap: verticalScale(99),
  },
});
