import { FC } from 'react';
import { KeyboardAvoidingView, SafeAreaView, View } from 'react-native';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import { ActionButton } from 'components/ActionButton/ActionButton';
import { AuthInput } from 'components/AuthInput/AuthInput';
import { FooterButton } from 'components/FooterButton/FooterButton';
import { Title } from 'components/Title/Title';

import { RegistrationScreenProps } from 'navigation/navigation.types';

import { styles } from '../auth.styles';
import { AuthFieldNames, AuthFormData } from '../auth.types';

import { registrationSchema } from './registrationScreen.settings';

export const RegistrationScreen: FC<RegistrationScreenProps> = ({
  navigation,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormData>({
    resolver: yupResolver(registrationSchema),
    mode: 'onSubmit',
  });

  const handleLoginButtonPress = () => {
    navigation.replace('Login');
  };

  const handleAuth = () => {
    navigation.replace('Onboarding');
  };

  const handleRegistrationButtonPress = () => {
    handleSubmit(handleAuth)();
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.header}>
          <Title title="Create account" />
        </View>
        <View style={[styles.body, styles.inputWrapper]}>
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
          <Controller
            control={control}
            render={({ field: { value, onChange } }) => (
              <AuthInput
                value={value}
                placeholder="Confirm Password"
                onChangeText={onChange}
                subtitle={errors.confirmPassword?.message}
              />
            )}
            name={AuthFieldNames.confirmPassword}
          />
        </View>
        <View style={styles.footer}>
          <ActionButton
            label="Sign Up"
            size="large"
            onPress={handleRegistrationButtonPress}
          />
          <FooterButton onPress={handleLoginButtonPress} label="Sign In Menu" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
