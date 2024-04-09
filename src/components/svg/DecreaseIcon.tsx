import Svg, { SvgProps, Path } from 'react-native-svg';

import { verticalScale } from 'constants/scale';

export const DecreaseIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(24)}
    height={verticalScale(25)}
    fill="none"
    {...props}>
    <Path
      stroke="#F1C40F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 9.5 6 6 6-6"
    />
  </Svg>
);
