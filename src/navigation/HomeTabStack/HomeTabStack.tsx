import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from 'screens/HomeScreen/HomeScreen';
import { SearchScreen } from 'screens/SearchScreen/SearchScreen';

import { EMPTY_HEADER_STACK_OPTIONS } from 'navigation/navigationOptions';

import { HomeTabStackParamList } from './homeTabStack.types';

const Stack = createNativeStackNavigator<HomeTabStackParamList>();

export const HomeTabStack = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={EMPTY_HEADER_STACK_OPTIONS}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Search" component={SearchScreen} />
  </Stack.Navigator>
);
