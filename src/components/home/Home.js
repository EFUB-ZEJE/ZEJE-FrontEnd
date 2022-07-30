import React from 'react';
import {Row} from 'native-base';
import Tree from './Tree';
import LeftFlowers from './LeftFlowers';
import LeftWalks from './LeftWalks';
import {StyleSheet} from 'react-native';

export default function Home() {
  return (
    <>
      <Row style={styles.stateBar} space={3}>
        <LeftFlowers leftFlowers={0} />
        <LeftWalks leftWalks={0} />
      </Row>
      <Tree />
    </>
  );
}

const styles = StyleSheet.create({
  stateBar: {
    position: 'absolute',
    top: 10,
    zIndex: 10,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
