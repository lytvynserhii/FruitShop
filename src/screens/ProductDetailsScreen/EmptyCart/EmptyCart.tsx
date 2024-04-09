import { View } from 'react-native';

import { Title } from 'components/Title/Title';
import { AddToCartIcon } from 'components/svg/AddToCartIcon';

import { styles } from './emptyCart.styles';

export const EmptyCart = () => (
  <View style={styles.container}>
    <AddToCartIcon />
    <Title title="Your cart is empty" />
  </View>
);
