import { FC } from 'react';
import { Text } from 'react-native';

import { styles } from './title.styles';
import { TitleProps } from './title.types';

export const Title: FC<TitleProps> = ({ title }) => (
  <Text style={styles.text}>{title}</Text>
);
