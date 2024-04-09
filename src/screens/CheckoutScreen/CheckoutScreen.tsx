import { FC } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ActionButton } from 'components/ActionButton/ActionButton';

import { CheckoutScreenProps } from 'navigation/CartTabStack/cartTabStack.types';

import { OperationButtons } from './OperationButtons/OperationButtons';
import { PriceInfo } from './PriceInfo/PriceInfo';
import { ProductInfo } from './ProductInfo/ProductInfo';

import { styles } from './checkoutScreen.styles';

export const CheckoutScreen: FC<CheckoutScreenProps> = ({
  route: {
    params: { product, amount },
  },
}) => {
  const DELIVERY_PRICE = 7511;
  const productPrice = amount * product.price;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View>
          <ProductInfo
            image={product.image}
            price={productPrice}
            amount={amount}
          />
          <OperationButtons />
        </View>
        <View style={styles.footer}>
          <PriceInfo
            productPrice={productPrice}
            productName={product.name}
            deliveryPrice={DELIVERY_PRICE}
          />
          <ActionButton label="Add to cart" />
        </View>
      </View>
    </SafeAreaView>
  );
};
