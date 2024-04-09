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

export type HomeTabStackParamList = {
  Home: undefined;
  Search: undefined;
};

type HomeTabStackScreenProps<T extends keyof HomeTabStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<HomeTabStackParamList, T>,
    RootStackScreenProps<keyof RootStackParamList>
  >;

export type HomeScreenProps = HomeTabStackScreenProps<'Home'>;
export type SearchScreenProps = HomeTabStackScreenProps<'Search'>;

export type HomeTabStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList>,
  NativeStackNavigationProp<HomeTabStackParamList>
>;
