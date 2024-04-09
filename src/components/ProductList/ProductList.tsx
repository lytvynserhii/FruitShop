import { FC } from 'react';
import { FlatList } from 'react-native';

import { ProductCard } from 'components/ProductCard/ProductCard';

import { Product } from 'store/productSections/productSections.types';

import { styles } from './productList.styles';
import { ProductListProps, RenderProductListItem } from './productList.types';

const keyExtractor = (product: Product) => product.id;

const renderItem: RenderProductListItem = ({ item }) => (
  <ProductCard product={item} />
);

export const ProductList: FC<ProductListProps> = ({
  data,
  style,
  containerStyle,
}) => (
  <FlatList
    keyExtractor={keyExtractor}
    data={data}
    renderItem={renderItem}
    numColumns={2}
    style={[styles.list, style]}
    columnWrapperStyle={styles.columnWrapperStyle}
    contentContainerStyle={containerStyle}
  />
);
