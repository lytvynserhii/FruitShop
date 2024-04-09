import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import {
  TabParamList,
  RootStackParamList,
  RootStackScreenProps,
} from 'navigation/navigation.types';
import { Product } from 'store/productSections/productSections.types';

export type CartTabStackParamList = {
  ProductDetails?: ProductDetailsScreenParams;
  Checkout: CheckoutScreenParams;
};

type CartTabStackScreenProps<T extends keyof CartTabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<CartTabStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

interface ProductDetailsScreenParams {
  product?: Product;
}

interface CheckoutScreenParams {
  product: Product;
  amount: number;
}

export type ProductDetailsScreenProps =
  CartTabStackScreenProps<'ProductDetails'>;
export type CheckoutScreenProps = CartTabStackScreenProps<'Checkout'>;

export type CartTabStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<CartTabStackParamList>
>;
