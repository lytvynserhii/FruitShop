import { FC } from 'react';
import { TextInput, View } from 'react-native';

import { SearchIcon } from 'components/svg/SearchIcon';

import { COLORS } from 'constants/colors';

import { styles } from './searchInput.styles';
import { SearchInputProps } from './searchInput.types';

export const SearchInput: FC<SearchInputProps> = ({
  containerStyles,
  ...props
}) => (
  <View style={[styles.container, containerStyles]}>
    <TextInput
      placeholder="Search"
      placeholderTextColor={COLORS.lightGrey}
      style={styles.input}
      {...props}
    />
    <SearchIcon />
  </View>
);
