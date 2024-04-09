import { TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { BackIcon } from 'components/svg/BackIcon';
import { SearchIcon } from 'components/svg/SearchIcon';

import { verticalScale } from 'constants/scale';

import { styles } from './cartTabStack.styles';

const HeaderRight = () => (
  <SearchIcon width={verticalScale(38)} height={verticalScale(38)} />
);

const HeaderLeft = () => {
  const navigation = useNavigation();

  if (navigation.canGoBack()) {
    return (
      <TouchableOpacity onPress={navigation.goBack}>
        <BackIcon />
      </TouchableOpacity>
    );
  }
};

export const CART_TAB_STACK_OPTIONS: NativeStackNavigationOptions = {
  headerTitleStyle: styles.title,
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerLeft: HeaderLeft,
  headerRight: HeaderRight,
};

export const PRODUCT_DETAILS_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  title: 'Shop',
};

export const CHECKOUT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  title: 'Cart',
};
