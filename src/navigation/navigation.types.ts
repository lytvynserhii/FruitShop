import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Registration: undefined;
  Onboarding: undefined;
  Tabs: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type LoginScreenProps = RootStackScreenProps<'Login'>;
export type RegistrationScreenProps = RootStackScreenProps<'Registration'>;
export type OnboardingScreenProps = RootStackScreenProps<'Onboarding'>;
