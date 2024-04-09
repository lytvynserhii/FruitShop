import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from 'screens/AuthScreens/LoginScreen/LoginScreen';
import { RegistrationScreen } from 'screens/AuthScreens/RegistrationScreen/RegistrationScreen';
import { OnboardingScreen } from 'screens/OnboardingScreen/OnboardingScreen';

import { TabNavigator } from './TabNavigator';
import { ROOT_STACK_OPTIONS } from './navigationOptions';

import { RootStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => (
  <Stack.Navigator screenOptions={ROOT_STACK_OPTIONS} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Registration" component={RegistrationScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Tabs" component={TabNavigator} />
  </Stack.Navigator>
);
