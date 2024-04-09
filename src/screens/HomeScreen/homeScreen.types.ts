import { SectionListData } from 'react-native';

import { ProductSectionData } from 'store/productSections/productSections.types';

export interface RenderSectionHeaderArgs {
  section: SectionListData<ProductSectionData>;
}
