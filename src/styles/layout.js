import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};

export const HEADER_HEIGHT = 52;
export const BOTTOM_HEIGHT = 62;
export const SCREEN_PADDING = '32px';
