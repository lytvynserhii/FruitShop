import { render } from '@testing-library/react-native';

import { HEADER_IMAGES } from 'constants/images';

import { OnboardingData } from '../onboardingScreen.types';

import { Slide } from './Slide';

import { TEST_ID } from './slide.settings';

const SLIDE_PROPS: OnboardingData = {
  id: 101,
  image: HEADER_IMAGES.logo,
  title: 'TEST_TITLE',
  subtitle: 'TEST_SUBTITLE',
};

describe('Slide component', () => {
  it('should render component with provided title', () => {
    const { getByText } = render(<Slide {...SLIDE_PROPS} />);

    expect(getByText(SLIDE_PROPS.title)).toBeTruthy();
  });

  it('should render component with provided subtitle', () => {
    const { getByText } = render(<Slide {...SLIDE_PROPS} />);

    expect(getByText(SLIDE_PROPS.subtitle)).toBeTruthy();
  });

  it('should render image with provided path', () => {
    const { getByTestId } = render(<Slide {...SLIDE_PROPS} />);

    expect(getByTestId(TEST_ID.IMAGE).props.source).toBe(SLIDE_PROPS.image);
  });
});
