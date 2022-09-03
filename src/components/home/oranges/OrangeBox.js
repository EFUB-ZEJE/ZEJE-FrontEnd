import React from 'react';
import styled from 'styled-components/native';
import Orange from './Orange';

export const ORANGES_LIST = [
  {
    name: 'OrangeFlower',
    maxWalk: 10, // 500에서 10으로 바꿈
  },
  {
    name: 'OrangeGold',
    maxWalk: 12000,
  },
  {
    name: 'OrangeGreen',
    maxWalk: 8000,
  },
  {
    name: 'OrangeMandarin',
    maxWalk: 11000,
  },
  {
    name: 'OrangeMt',
    maxWalk: 4000,
  },
  {
    name: 'OrangeRed',
    maxWalk: 2000,
  },
  {
    name: 'OrangeSour',
    maxWalk: 4000,
  },
  {
    name: 'OrangeThousand',
    maxWalk: 3000,
  },
  {
    name: 'OrangeTiny',
    maxWalk: 4000,
  },
];

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
