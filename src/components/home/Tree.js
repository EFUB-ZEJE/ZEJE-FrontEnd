import {Image, View} from 'native-base';
import React from 'react';
import Letter from './Letter';
import OrangeBox from './oranges/OrangeBox';
import Basket from './Basket';

function Tree() {
  return (
    <View>
      <OrangeBox />
      <Letter />
      <Basket />
      <Image
        style={{borderRadius: 10}}
        alt="tree background"
        h={'493px'}
        w={'100%'}
        resizeMode={'cover'}
        source={require(`../../assets/images/tree.png`)}
      />
    </View>
  );
}

export default Tree;
