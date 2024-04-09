import { Dimensions } from 'react-native';

const MOCKUP_HEIGHT = 896;
const MOCKUP_WIDTH = 414;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const horizontalScale = (size: number) =>
  (DEVICE_WIDTH / MOCKUP_WIDTH) * size;
export const verticalScale = (size: number) =>
  (DEVICE_HEIGHT / MOCKUP_HEIGHT) * size;

export const TAB_ICON_SIZE = verticalScale(34);
