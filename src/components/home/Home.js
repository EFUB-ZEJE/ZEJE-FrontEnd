import React from 'react';
import {Box, Row} from 'native-base';
import Tree from './Tree';
import LeftFlowers from './LeftFlowers';
import LeftWalks from './LeftWalks';
import {StyleSheet} from 'react-native';

export default function Home() {
  return (
    <Box>
      <Row style={styles.stateBar} space={'5%'} w={'100%'}>
        <LeftFlowers />
        <LeftWalks />
      </Row>
      <Tree />
    </Box>
  );
}

const styles = StyleSheet.create({
  stateBar: {
    position: 'absolute',
    top: 15,
    zIndex: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 25,
  },
});
