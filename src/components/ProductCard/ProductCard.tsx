import { FC } from 'react';
import { Text, ImageBackground, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { CartTabStackNavigationProp } from 'navigation/CartTabStack/cartTabStack.types';

import { styles } from './productCard.styles';
import { ProductCardProps } from './productCard.types';

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation<CartTabStackNavigationProp>();

  const handlePress = () => {
    navigation.navigate('CartStack', {
      screen: 'ProductDetails',
      params: {
        product,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <ImageBackground
        source={product.image}
        resizeMode="contain"
        style={styles.image}>
        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.price}>{product.price}$</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};
