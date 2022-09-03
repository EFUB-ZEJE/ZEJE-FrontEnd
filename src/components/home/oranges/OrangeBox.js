import React from 'react';
import styled from 'styled-components/native';
import Orange from './Orange';

export default function OrangeBox() {
  return (
    <View>
      <Orange top={'20%'} order={1} />
      <Orange top={'55%'} order={2} />
      <Orange left={'38%'} order={3} />
      <Orange left={'38%'} top={'35%'} order={4} />
      <Orange left={'38%'} top={'75%'} order={5} />
      <Orange top={'20%'} right={0} order={6} />
      <Orange top={'55%'} right={0} order={7} />
    </View>
  );
}

const View = styled.View`
  position: absolute;
  width: 180px;
  height: 195px;
  z-index: 5;
  left: 20%;
  top: 15%;
`;
