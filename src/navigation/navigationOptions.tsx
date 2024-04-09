import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { COLORS } from 'constants/colors';

export const ROOT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
};
