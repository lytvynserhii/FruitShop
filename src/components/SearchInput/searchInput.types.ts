import { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export interface SearchInputProps extends TextInputProps {
  containerStyles?: StyleProp<ViewStyle>;
}
