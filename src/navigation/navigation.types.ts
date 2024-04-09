import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CartTabStackParamList } from './CartTabStack/cartTabStack.types';
import { HomeTabStackParamList } from './HomeTabStack/homeTabStack.types';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Onboarding: undefined;
  Tabs: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
  HomeStack: NavigatorScreenParams<HomeTabStackParamList>;
  Notification: undefined;
  Plus: undefined;
  CartStack: NavigatorScreenParams<CartTabStackParamList>;
  Settings: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type LoginScreenProps = RootStackScreenProps<'Login'>;
export type RegistrationScreenProps = RootStackScreenProps<'Registration'>;
export type OnboardingScreenProps = RootStackScreenProps<'Onboarding'>;
