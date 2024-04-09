import { FC } from 'react';
import { Pressable, Text } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { SearchIcon } from 'components/svg/SearchIcon';

import { HomeTabStackNavigationProp } from 'navigation/HomeTabStack/homeTabStack.types';

import { styles } from './searchButton.styles';
import { SearchButtonProps } from './searchButton.types';

export const SearchButton: FC<SearchButtonProps> = ({ containerStyles }) => {
  const navigation = useNavigation<HomeTabStackNavigationProp>();

  const handlePress = () => {
    navigation.navigate('HomeStack', { screen: 'Search' });
  };

  return (
    <Pressable
      style={[styles.container, containerStyles]}
      onPress={handlePress}>
      <Text style={styles.label}>Search</Text>
      <SearchIcon />
    </Pressable>
  );
};
