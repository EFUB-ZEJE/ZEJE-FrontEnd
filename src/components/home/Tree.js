import {Image} from 'native-base';
import React from 'react';
import OrangeBox from './oranges/OrangeBox';

function Tree() {
  return (
    <>
      <OrangeBox />
      <Image
        alt="tree background"
        h={'493px'}
        resizeMode={'contain'}
        source={require(`../../assets/images/tree.png`)}
      />
    </>
  );
}

export default Tree;
