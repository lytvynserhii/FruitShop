import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { COLORS } from 'constants/colors';

export const ROOT_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  headerStyle: {
    backgroundColor: COLORS.white,
  },
};

export const ROOT_TAB_OPTIONS: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: COLORS.yellow,
  tabBarInactiveTintColor: COLORS.lightGrey,
  tabBarStyle: {
    borderTopWidth: 0,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 17,
    shadowOpacity: 0.25,
    elevation: 17,
  },
};
