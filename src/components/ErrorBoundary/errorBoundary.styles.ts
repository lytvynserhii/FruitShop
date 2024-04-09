import { StyleSheet } from 'react-native';

import { verticalScale } from 'constants/scale';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: verticalScale(20),
    fontSize: verticalScale(20),
    textAlign: 'center',
  },
});
