import {Image, View} from 'native-base';
import React from 'react';
import Letter from './Letter';
import OrangeBox from './oranges/OrangeBox';

function Tree() {
  return (
    <View>
      <OrangeBox />
      <Letter />
      <Image
        alt="tree background"
        h={'493px'}
        resizeMode={'contain'}
        source={require(`../../assets/images/tree.png`)}
      />
    </View>
  );
}

export default Tree;
