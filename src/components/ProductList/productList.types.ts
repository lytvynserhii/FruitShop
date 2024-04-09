import { ListRenderItem, StyleProp, ViewStyle } from 'react-native';

import { Product } from 'store/productSections/productSections.types';

export interface ProductListProps {
  data: Product[];
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

export type RenderProductListItem = ListRenderItem<Product>;
