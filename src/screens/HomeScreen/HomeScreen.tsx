import {
  ListRenderItem,
  SafeAreaView,
  Text,
  SectionList,
  View,
} from 'react-native';

import { Header } from 'components/Header/Header';
import { ProductList } from 'components/ProductList/ProductList';
import { SearchButton } from 'components/SearchButton/SearchButton';

import { useAppSelector } from 'store/hooks';
import { ProductSectionData } from 'store/productSections/productSections.types';

import { styles } from './homeScreen.styles';
import { RenderSectionHeaderArgs } from './homeScreen.types';

const keyExtractor = (list: ProductSectionData) => list.key;

const renderSectionHeader = ({ section }: RenderSectionHeaderArgs) => (
  <Text style={styles.title}>{section.title}</Text>
);

const renderItem: ListRenderItem<ProductSectionData> = ({ item }) => (
  <ProductList data={item.list} />
);

export const HomeScreen = () => {
  const { sections } = useAppSelector(state => state.productSections);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.headerWrapper}>
          <Header />
          <SearchButton containerStyles={styles.search} />
        </View>
        <SectionList
          sections={sections}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled={false}
          contentContainerStyle={styles.listContainer}
          style={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};
