import Svg, { SvgProps, Path } from 'react-native-svg';

import { TAB_ICON_SIZE } from 'constants/scale';

export const CartTabIcon = (props: SvgProps) => (
  <Svg
    width={TAB_ICON_SIZE}
    height={TAB_ICON_SIZE}
    viewBox="0 0 34 34"
    fill="none"
    {...props}>
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.75 31.167a1.417 1.417 0 1 0 0-2.834 1.417 1.417 0 0 0 0 2.834ZM28.333 31.167a1.417 1.417 0 1 0 0-2.834 1.417 1.417 0 0 0 0 2.834ZM1.417 1.417h5.666l3.797 18.969a2.833 2.833 0 0 0 2.833 2.28h13.77a2.834 2.834 0 0 0 2.834-2.28L32.583 8.5H8.5"
    />
  </Svg>
);
