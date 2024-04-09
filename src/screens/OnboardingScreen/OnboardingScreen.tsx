import { FC, useEffect, useRef, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

import { FooterButton } from 'components/FooterButton/FooterButton';
import { Pagination } from 'components/Pagination/Pagination';

import { DEVICE_WIDTH } from 'constants/scale';

import { OnboardingScreenProps } from 'navigation/navigation.types';

import { Slide } from './Slide/Slide';

import { ONBOARDING_DATA } from './onboardingScreen.settings';
import { styles } from './onboardingScreen.styles';

export const OnboardingScreen: FC<OnboardingScreenProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sliderRef = useRef<ScrollView>(null);

  const handleNextPress = () => {
    if (activeIndex < ONBOARDING_DATA.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    sliderRef.current?.scrollTo({
      x: DEVICE_WIDTH * activeIndex,
      animated: true,
    });
  }, [activeIndex]);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.body}>
        <ScrollView
          ref={sliderRef}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}>
          {ONBOARDING_DATA.map(data => (
            <Slide {...data} key={data.id} />
          ))}
        </ScrollView>
        <Pagination
          activeIndex={activeIndex}
          pageCount={ONBOARDING_DATA.length}
        />
      </View>
      <FooterButton label="Next" onPress={handleNextPress} />
    </SafeAreaView>
  );
};
