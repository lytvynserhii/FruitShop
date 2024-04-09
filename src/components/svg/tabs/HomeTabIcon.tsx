import Svg, { SvgProps, Path } from 'react-native-svg';

import { TAB_ICON_SIZE } from 'constants/scale';

export const HomeTabIcon = (props: SvgProps) => (
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
      d="M4.25 12.75 17 2.833l12.75 9.917v15.583a2.833 2.833 0 0 1-2.833 2.834H7.083a2.834 2.834 0 0 1-2.833-2.834V12.75Z"
    />
    <Path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.75 31.167V17h8.5v14.167"
    />
  </Svg>
);
