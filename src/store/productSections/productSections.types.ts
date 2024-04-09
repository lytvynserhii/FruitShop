import { ImageSourcePropType } from 'react-native';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: ImageSourcePropType;
}

export interface ProductSectionData {
  key: string;
  list: Product[];
}

export interface ProductSection {
  title: string;
  data: ProductSectionData[];
}

export interface ProductListState {
  sections: ProductSection[];
}

export interface ProductSectionsState {
  sections: ProductSection[];
}
