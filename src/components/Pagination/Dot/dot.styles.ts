import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  dot: {
    width: verticalScale(16),
    height: verticalScale(16),
    backgroundColor: COLORS.grey,
    borderRadius: 8,
  },
  activeDot: {
    backgroundColor: COLORS.yellow,
  },
});
