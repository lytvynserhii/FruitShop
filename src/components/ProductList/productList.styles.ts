import { StyleSheet } from 'react-native';

import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  list: {
    rowGap: verticalScale(22),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
});
