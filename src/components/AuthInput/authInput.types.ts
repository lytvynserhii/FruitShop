import { TextInputProps } from 'react-native';

export interface AuthInputProps extends TextInputProps {
  subtitle: string | undefined;
}
