import { View } from 'react-native';

import { PlusTabIcon } from 'components/svg/tabs/PlusTabIcon';

import { styles } from './plusTabButton.styles';

export const PlusTabButton = () => (
  <View style={styles.container}>
    <PlusTabIcon />
  </View>
);
