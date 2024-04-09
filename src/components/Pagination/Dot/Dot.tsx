import { FC } from 'react';
import { View } from 'react-native';

import { styles } from './dot.styles';
import { DotProps } from './dot.types';

export const Dot: FC<DotProps> = ({ isActive }) => (
  <View style={[styles.dot, isActive && styles.activeDot]} />
);
