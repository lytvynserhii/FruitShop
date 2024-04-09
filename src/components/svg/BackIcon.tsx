import Svg, { SvgProps, Path } from 'react-native-svg';

import { verticalScale } from 'constants/scale';

export const BackIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(38)}
    height={verticalScale(38)}
    viewBox="0 0 38 38"
    fill="none"
    {...props}>
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 34.833c8.744 0 15.833-7.088 15.833-15.833 0-8.745-7.088-15.833-15.833-15.833-8.745 0-15.833 7.088-15.833 15.833 0 8.744 7.088 15.833 15.833 15.833Z"
    />
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 12.667 12.667 19 19 25.333M25.333 19H12.667"
    />
  </Svg>
);
