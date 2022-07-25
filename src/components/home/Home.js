import React from 'react';
import {Box, Image} from 'native-base';
import GoToAroundScreenButton from './GoToAroundScreenButton';
import {theme} from '../../styles/theme';

export default function Home() {
  return (
    <Box
      h={'100%'}
      borderColor={theme.colors.divider}
      borderTopWidth={1}
      borderBottomWidth={1}>
      <Image
        alt="tree background"
        h={'67%'}
        px={'20px'}
        justifyContent={'flex-start'}
        resizeMode={'contain'}
        source={require(`../../assets/images/tree.png`)}
      />
      <GoToAroundScreenButton />
    </Box>
  );
}
