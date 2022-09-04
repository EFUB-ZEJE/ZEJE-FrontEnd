import React from 'react';
import {Box} from 'native-base';
import {Shadow} from 'react-native-shadow-2';
import {palette} from '../../styles/theme';
import layout from '../../styles/layout';

export default function ShadowContainer({children, borderRadius}) {
  return (
    <Shadow
      distance={15}
      startColor={palette.gray100}
      endColor="#ffffff"
      offset={[0, 0]}
      style={{
        borderRadius: borderRadius,
        bgColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        bg={'white'}
        justifyContent={'center'}
        alignSelf={'center'}
        borderRadius={borderRadius}
        width={layout.window.width - 60}>
        {children}
      </Box>
    </Shadow>
  );
}
