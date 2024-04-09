import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { defaultStyles, buttonSize } from './actionButton.styles';
import { ActionButtonProps } from './actionButton.types';

export const ActionButton: FC<ActionButtonProps> = ({
  onPress,
  label,
  containerStyle,
  size = 'medium',
}) => (
  <TouchableOpacity
    style={[
      defaultStyles.container,
      buttonSize[size].container,
      containerStyle,
    ]}
    onPress={onPress}>
    <Text style={[defaultStyles.label, buttonSize[size].label]}>{label}</Text>
  </TouchableOpacity>
);
