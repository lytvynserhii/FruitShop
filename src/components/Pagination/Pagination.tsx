import { FC } from 'react';
import { View } from 'react-native';

import { Dot } from './Dot/Dot';

import { styles } from './pagination.styles';
import { PaginationProps } from './pagination.types';

export const Pagination: FC<PaginationProps> = ({ pageCount, activeIndex }) => {
  const dotList = Array(pageCount)
    .fill(null)
    .map((_, index) => <Dot key={index} isActive={activeIndex === index} />);

  return <View style={styles.container}>{dotList}</View>;
};
