import Svg, { SvgProps, Path } from 'react-native-svg';

import { verticalScale } from 'constants/scale';

export const DeleteIcon = (props: SvgProps) => (
  <Svg
    width={verticalScale(24)}
    height={verticalScale(24)}
    viewBox="0 0 24 24"
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14ZM10 11v6M14 11v6"
    />
  </Svg>
);
