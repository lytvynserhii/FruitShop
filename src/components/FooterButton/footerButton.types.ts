import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native';

export interface FooterButtonProps extends TouchableOpacityProps {
  label: string;
  containerStyle?: StyleProp<ViewStyle>;
}
