import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './footerButton.styles';
import { FooterButtonProps } from './footerButton.types';

export const FooterButton: FC<FooterButtonProps> = ({
  onPress,
  label,
  containerStyle,
}) => (
  <TouchableOpacity
    style={[styles.wrapper, containerStyle ?? styles.defaultWrapperStyles]}
    onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);
