import { StyleSheet } from 'react-native';

import { COLORS } from 'constants/colors';
import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: verticalScale(81),
    backgroundColor: COLORS.lightGrey,
    borderRadius: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
