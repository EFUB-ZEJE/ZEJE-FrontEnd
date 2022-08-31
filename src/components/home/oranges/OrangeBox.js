import React from 'react';
import styled from 'styled-components/native';
import Orange from './Orange';

export const ORANGES_LIST = [
  {
    name: 'OrangeFlower',
    maxWalk: 500,
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
      <Orange
        name={ORANGES_LIST[0].name}
        maxWalk={ORANGES_LIST[0].maxWalk}
        top={'20%'}
      />
      <Orange
        name={ORANGES_LIST[1].name}
        maxWalk={ORANGES_LIST[1].maxWalk}
        top={'55%'}
      />

      <Orange
        name={ORANGES_LIST[2].name}
        maxWalk={ORANGES_LIST[2].maxWalk}
        left={'38%'}
      />
      <Orange
        name={ORANGES_LIST[3].name}
        maxWalk={ORANGES_LIST[3].maxWalk}
        left={'38%'}
        top={'35%'}
      />
      <Orange
        name={ORANGES_LIST[4].name}
        maxWalk={ORANGES_LIST[4].maxWalk}
        left={'38%'}
        top={'75%'}
      />

      <Orange
        name={ORANGES_LIST[5].name}
        maxWalk={ORANGES_LIST[5].maxWalk}
        top={'20%'}
        right={0}
      />
      <Orange
        name={ORANGES_LIST[6].name}
        maxWalk={ORANGES_LIST[6].maxWalk}
        top={'55%'}
        right={0}
      />
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
