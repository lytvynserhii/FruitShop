import { FC } from 'react';
import { View, Text, TextInput } from 'react-native';

import { COLORS } from 'constants/colors';

import { styles } from './authInput.styles';
import { AuthInputProps } from './authInput.types';

export const AuthInput: FC<AuthInputProps> = ({
  value,
  placeholder,
  onChangeText,
  subtitle,
  ...props
}) => (
  <View>
    <TextInput
      {...props}
      value={value}
      onChangeText={onChangeText}
      spellCheck={false}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={placeholder}
      placeholderTextColor={COLORS.blackWithOpacity}
      style={styles.input}
    />
    {!!subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);
