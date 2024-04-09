import { FC } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { ActionButton } from 'components/ActionButton/ActionButton';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { FooterButton } from 'components/FooterButton/FooterButton';
import { Title } from 'components/Title/Title';

import { IS_IOS } from 'constants/platforms';

import { LoginScreenProps } from 'navigation/navigation.types';

import { styles } from '../auth.styles';
import { AuthFieldNames, LoginFormData } from '../auth.types';

import { loginSchema } from './loginScreen.settings';

export const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onSubmit',
  });

  const handleRegistrationButtonPress = () => {
    navigation.replace('Registration');
  };

  const handleAuth = () => {};

  const handleLoginButtonPress = () => {
    handleSubmit(handleAuth)();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView
        behavior={IS_IOS ? 'padding' : 'height'}
        style={styles.container}>
        <View style={styles.header}>
          <Title title="Sign In" />
        </View>
        <View style={styles.body}>
          <View style={styles.inputWrapper}>
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <AuthInput
                  value={value}
                  placeholder="Email"
                  onChangeText={onChange}
                  subtitle={errors.email?.message}
                  keyboardType="email-address"
                />
              )}
              name={AuthFieldNames.email}
            />
            <Controller
              control={control}
              render={({ field: { value, onChange } }) => (
                <AuthInput
                  value={value}
                  placeholder="Password"
                  onChangeText={onChange}
                  subtitle={errors.password?.message}
                />
              )}
              name={AuthFieldNames.password}
            />
          </View>
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotButtonLabel}>Forgot password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <ActionButton
            label="Sign In"
            size="large"
            onPress={handleLoginButtonPress}
          />
          <FooterButton
            onPress={handleRegistrationButtonPress}
            label="Sign Up Menu"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
