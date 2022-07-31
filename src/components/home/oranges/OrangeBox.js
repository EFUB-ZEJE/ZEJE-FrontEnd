import React from 'react';
import styled from 'styled-components';
import Orange from './Orange';

export const ORANGES_LIST = [
  {
    name: 'OrangeFlower',
    walk: 200,
    maxWalk: 500,
  },
  {
    name: 'OrangeGold',
    walk: 1000,
    maxWalk: 12000,
  },
  {
    name: 'OrangeGreen',
    walk: 500,
    maxWalk: 8000,
  },
  {
    name: 'OrangeMandarin',
    walk: 2000,
    maxWalk: 11000,
  },
  {
    name: 'OrangeMt',
    walk: 1000,
    maxWalk: 4000,
  },
  {
    name: 'OrangeRed',
    walk: 1000,
    maxWalk: 2000,
  },
  {
    name: 'OrangeSour',
    walk: 1000,
    maxWalk: 4000,
  },
  {
    name: 'OrangeThousand',
    walk: 1000,
    maxWalk: 3000,
  },
  {
    name: 'OrangeTiny',
    walk: 1000,
    maxWalk: 4000,
  },
];

export default function OrangeBox() {
  return (
    <View>
      <Orange
        name={ORANGES_LIST[0].name}
        walk={ORANGES_LIST[0].walk}
        maxWalk={ORANGES_LIST[0].maxWalk}
        top={'20%'}
      />
      <Orange
        name={ORANGES_LIST[1].name}
        walk={ORANGES_LIST[1].walk}
        maxWalk={ORANGES_LIST[1].maxWalk}
        top={'55%'}
      />

      <Orange
        name={ORANGES_LIST[2].name}
        walk={ORANGES_LIST[2].walk}
        maxWalk={ORANGES_LIST[2].maxWalk}
        left={'38%'}
      />
      <Orange
        name={ORANGES_LIST[3].name}
        walk={ORANGES_LIST[3].walk}
        maxWalk={ORANGES_LIST[3].maxWalk}
        left={'38%'}
        top={'35%'}
      />
      <Orange
        name={ORANGES_LIST[4].name}
        walk={ORANGES_LIST[4].walk}
        maxWalk={ORANGES_LIST[4].maxWalk}
        left={'38%'}
        top={'75%'}
      />

      <Orange
        name={ORANGES_LIST[5].name}
        walk={ORANGES_LIST[5].walk}
        maxWalk={ORANGES_LIST[5].maxWalk}
        top={'20%'}
        right={0}
      />
      <Orange
        name={ORANGES_LIST[6].name}
        walk={ORANGES_LIST[6].walk}
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
