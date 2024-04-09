import { FC } from 'react';
import { View } from 'react-native';

import { PriceRow } from './PriceRow/PriceRow';

import { styles } from './priceInfo.styles';
import { PriceInfoProps } from './priceInfo.types';

export const PriceInfo: FC<PriceInfoProps> = ({
  productPrice,
  deliveryPrice,
  productName,
}) => (
  <View>
    <PriceRow label={productName} price={productPrice} />
    <PriceRow label="Delivery" price={deliveryPrice} />
    <PriceRow
      label="Total"
      price={productPrice + deliveryPrice}
      textStyle={styles.totalPriceText}
      containerStyle={styles.totalPriceRow}
    />
  </View>
);
