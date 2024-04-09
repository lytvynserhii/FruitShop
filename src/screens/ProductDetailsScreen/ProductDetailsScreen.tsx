import { FC, useState } from 'react';
import { SafeAreaView, Image, View, Text } from 'react-native';

import { ActionButton } from 'components/ActionButton/ActionButton';
import { NumberPicker } from 'components/NumberPicker/NumberPicker';

import { ProductDetailsScreenProps } from 'navigation/CartTabStack/cartTabStack.types';

import { EmptyCart } from './EmptyCart/EmptyCart';

import { styles } from './productDetailsScreen.styles';

export const ProductDetailsScreen: FC<ProductDetailsScreenProps> = ({
  navigation,
  route: { params },
}) => {
  const [amount, setAmount] = useState(1);

  if (!params?.product) {
    return <EmptyCart />;
  }

  const { product } = params;

  const handleAdding = () => {
    navigation.navigate('Checkout', {
      product,
      amount,
    });
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={product.image}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <Text style={styles.name}>{product.name}</Text>
        <NumberPicker value={amount} onChangeValue={setAmount} />
        <Text style={styles.price}>${product.price * amount}US</Text>
      </View>
      <ActionButton
        label="Add to cart"
        onPress={handleAdding}
        containerStyle={styles.actionButton}
      />
    </SafeAreaView>
  );
};
