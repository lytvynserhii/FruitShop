import { StyleSheet } from 'react-native';

import { horizontalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: horizontalScale(9),
  },
});
