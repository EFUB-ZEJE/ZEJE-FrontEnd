import React from 'react';
import {Pressable} from 'native-base';
import OrangeSvg from './OrangeSvg';

export default function Orange({name, walk, top, left, right}) {
  return (
    <Pressable position={'absolute'} top={top} left={left} right={right}>
      <OrangeSvg name={name} />
    </Pressable>
  );
}
