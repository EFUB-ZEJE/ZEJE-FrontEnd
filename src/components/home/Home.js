import React from 'react';
import {Column} from 'native-base';
import layout, {BOTTOM_HEIGHT, HEADER_HEIGHT} from '../../styles/layout';
import Tree from './Tree';

export default function Home() {
  const HOME_HEIGHT = layout.window.height - HEADER_HEIGHT - BOTTOM_HEIGHT;
  return (
    <Column h={HOME_HEIGHT} justifyContent={'center'}>
      <Tree />
    </Column>
  );
}
