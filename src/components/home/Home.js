import React from 'react';
import {Row} from 'native-base';
import Tree from './Tree';
import LeftFlowers from './LeftFlowers';
import LeftWalks from './LeftWalks';

export default function Home() {
  return (
    <>
      <Row
        position={'absolute'}
        top={4}
        zIndex={10}
        justifyContent={'center'}
        alignSelf={'center'}
        space={3}>
        <LeftFlowers leftFlowers={0} />
        <LeftWalks leftWalks={0} />
      </Row>
      <Tree />
    </>
  );
}
