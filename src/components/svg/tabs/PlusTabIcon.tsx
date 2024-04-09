import Svg, { SvgProps, Path } from 'react-native-svg';

import { verticalScale } from 'constants/scale';

export const PlusTabIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(44)}
    height={verticalScale(44)}
    viewBox="0 0 44 44"
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 9.703v24.594M9.703 22h24.594"
    />
  </Svg>
);
