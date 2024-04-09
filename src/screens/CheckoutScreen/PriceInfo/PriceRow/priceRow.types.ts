import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface PriceRowProps {
  label: string;
  price: number;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
