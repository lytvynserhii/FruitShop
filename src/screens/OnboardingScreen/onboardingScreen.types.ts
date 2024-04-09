import { ImageSourcePropType } from 'react-native';

export interface OnboardingData {
  id: number;
  image: ImageSourcePropType;
  title: string;
  subtitle: string;
}
