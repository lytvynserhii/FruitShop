import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(16),
    backgroundColor: COLORS.white,
  },
});
