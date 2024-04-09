import { FC } from 'react';
import { Text, View } from 'react-native';

import { styles } from './priceRow.styles';
import { PriceRowProps } from './priceRow.types';

export const PriceRow: FC<PriceRowProps> = ({
  label,
  price,
  textStyle,
  containerStyle,
}) => (
  <View style={[styles.row, containerStyle]}>
    <Text style={[styles.defaultText, textStyle]}>{label}</Text>
    <Text style={[styles.defaultText, textStyle]}>${price} US</Text>
  </View>
);
