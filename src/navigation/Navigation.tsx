import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EmptyScreen } from 'screens/EmptyScreen/EmptyScreen';

import { ROOT_STACK_OPTIONS } from './navigationOptions';

import { RootStackParamList } from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const AppStack = () => (
  <Stack.Navigator screenOptions={ROOT_STACK_OPTIONS} initialRouteName="Login">
    <Stack.Screen name="Login" component={EmptyScreen} />
    <Stack.Screen name="Registration" component={EmptyScreen} />
    <Stack.Screen name="Onboarding" component={EmptyScreen} />
    <Stack.Screen name="Tabs" component={EmptyScreen} />
  </Stack.Navigator>
);
