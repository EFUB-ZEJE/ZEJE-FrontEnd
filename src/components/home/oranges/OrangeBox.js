import React from 'react';
import styled from 'styled-components';
import Orange from './Orange';

const ORANGES_LIST = [
  {
    name: 'OrangeFlower',
    walk: 200,
  },
  {
    name: 'OrangeGold',
    walk: 500,
  },
  {
    name: 'OrangeGreen',
    walk: 500,
  },
  {
    name: 'OrangeMandarin',
    walk: 500,
  },
  {
    name: 'OrangeMt',
    walk: 500,
  },
  {
    name: 'OrangeSour',
    walk: 500,
  },
  {
    name: 'OrangeThousand',
    walk: 500,
  },
];

export default function OrangeBox() {
  return (
    <View>
      <Orange
        name={ORANGES_LIST[0].name}
        walk={ORANGES_LIST[0].walk}
        top={'20%'}
      />
      <Orange
        name={ORANGES_LIST[1].name}
        walk={ORANGES_LIST[1].walk}
        top={'55%'}
      />

      <Orange
        name={ORANGES_LIST[2].name}
        walk={ORANGES_LIST[2].walk}
        left={'38%'}
      />
      <Orange
        name={ORANGES_LIST[3].name}
        walk={ORANGES_LIST[3].walk}
        left={'38%'}
        top={'35%'}
      />
      <Orange
        name={ORANGES_LIST[4].name}
        walk={ORANGES_LIST[4].walk}
        left={'38%'}
        top={'75%'}
      />

      <Orange
        name={ORANGES_LIST[5].name}
        walk={ORANGES_LIST[5].walk}
        top={'20%'}
        right={0}
      />
      <Orange
        name={ORANGES_LIST[6].name}
        walk={ORANGES_LIST[6].walk}
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
