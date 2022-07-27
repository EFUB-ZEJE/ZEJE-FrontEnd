import React from 'react';
import {Column} from 'native-base';
import {theme} from '../../styles/theme';
import layout, {BOTTOM_HEIGHT, HEADER_HEIGHT} from '../../styles/layout';
import Tree from './Tree';
import GoToAroundScreenButton from './GoToAroundScreenButton';

export default function Home() {
  const HOME_HEIGHT = layout.window.height - HEADER_HEIGHT - BOTTOM_HEIGHT;
  return (
    <Column
      h={HOME_HEIGHT}
      justifyContent={'center'}
      borderColor={theme.colors.divider}
      borderTopWidth={1}
      borderBottomWidth={1}
      space={'3%'}
      py={6}>
      <Tree />
      <GoToAroundScreenButton />
    </Column>
  );
}
