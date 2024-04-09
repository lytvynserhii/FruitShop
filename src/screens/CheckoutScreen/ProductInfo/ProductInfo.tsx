import { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './productInfo.styles';
import { ProductInfoProps } from './productInfo.types';

export const ProductInfo: FC<ProductInfoProps> = ({ image, price, amount }) => (
  <View style={styles.container}>
    <Image source={image} resizeMode="contain" style={styles.image} />
    <View style={styles.label}>
      <Text style={styles.text}>{amount} Kg</Text>
      <Text style={styles.text}>${price} US</Text>
    </View>
  </View>
);
