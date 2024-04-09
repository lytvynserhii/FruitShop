import { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { SearchIcon } from 'components/svg/SearchIcon';

import { styles } from './searchButton.styles';
import { SearchButtonProps } from './searchButton.types';

export const SearchButton: FC<SearchButtonProps> = ({ containerStyles }) => {
  const handlePress = () => {};

  return (
    <Pressable
      style={[styles.container, containerStyles]}
      onPress={handlePress}>
      <Text style={styles.label}>Search</Text>
      <SearchIcon />
    </Pressable>
  );
};
