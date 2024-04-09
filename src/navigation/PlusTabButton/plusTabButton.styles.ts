import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: verticalScale(60),
    height: verticalScale(60),
    marginBottom: verticalScale(13),
    backgroundColor: COLORS.yellow,
    borderRadius: 30,
  },
});
