import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EmptyScreen } from 'screens/EmptyScreen/EmptyScreen';

import {
  CART_TAB_STACK_OPTIONS,
  CHECKOUT_SCREEN_OPTIONS,
  PRODUCT_DETAILS_SCREEN_OPTIONS,
} from './CartTabStackOptions';

import { CartTabStackParamList } from './cartTabStack.types';

const Stack = createNativeStackNavigator<CartTabStackParamList>();

export const CartTabStack = () => (
  <Stack.Navigator
    initialRouteName="ProductDetails"
    screenOptions={CART_TAB_STACK_OPTIONS}>
    <Stack.Screen
      name="ProductDetails"
      component={EmptyScreen}
      options={PRODUCT_DETAILS_SCREEN_OPTIONS}
    />
    <Stack.Screen
      name="Checkout"
      component={EmptyScreen}
      options={CHECKOUT_SCREEN_OPTIONS}
    />
  </Stack.Navigator>
);
