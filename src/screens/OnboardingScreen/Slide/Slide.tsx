import { FC } from 'react';
import { Image, Text, View } from 'react-native';

import { Title } from 'components/Title/Title';

import { OnboardingData } from '../onboardingScreen.types';

import { styles } from './slide.styles';

export const Slide: FC<OnboardingData> = ({ image, title, subtitle }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.image} resizeMode="contain" />
    <Title title={title} />
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);
