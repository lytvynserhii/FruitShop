import Svg, { SvgProps, Path } from 'react-native-svg';

import { verticalScale } from 'constants/scale';

export const SearchIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(25)}
    height={verticalScale(25)}
    viewBox="0 0 25 25"
    fill="none"
    {...props}>
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.458 19.792a8.333 8.333 0 1 0 0-16.667 8.333 8.333 0 0 0 0 16.667ZM21.875 21.875l-4.531-4.531"
    />
  </Svg>
);
