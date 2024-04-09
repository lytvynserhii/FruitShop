import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { Header } from 'components/Header/Header';
import { ProductList } from 'components/ProductList/ProductList';
import { SearchInput } from 'components/SearchInput/SearchInput';

import { useAppSelector } from 'store/hooks';

import { styles } from './searchScreen.styles';

export const SearchScreen = () => {
  const [text, setText] = useState('');

  const { products } = useAppSelector(state => state.search);

  const filteredProducts = text
    ? products.filter(product => product.name.includes(text))
    : [];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Header />
          <SearchInput
            containerStyles={styles.input}
            value={text}
            onChangeText={setText}
          />
        </View>
        <ProductList
          data={filteredProducts}
          style={styles.list}
          containerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};
