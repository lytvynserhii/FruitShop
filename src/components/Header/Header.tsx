import { View, Image, Text } from 'react-native';

import { HEADER_IMAGES } from 'constants/images';

import { styles } from './header.styles';

export const Header = () => (
  <View style={styles.container}>
    <View style={styles.logo}>
      <Image source={HEADER_IMAGES.logo} />
      <Text style={styles.title}>BestFruitShop</Text>
    </View>
    <Image source={HEADER_IMAGES.profile} style={styles.profile} />
  </View>
);
