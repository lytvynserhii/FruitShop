import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

type ActionButtonSize = 'medium' | 'large';

export interface ActionButtonProps extends TouchableOpacityProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
  size?: ActionButtonSize;
}
