import {Center, Row} from 'native-base';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme';
import {Subhead2} from '../../styles/font';

import React from 'react';
export default function OnBoardingBottom() {
  return (
    <Center>
      <Row space={5}>
        <Button>
          <Subhead2 style={{color: theme.colors.main, marginVertical: 10}}>
            건너뛰기
          </Subhead2>
        </Button>
        <Button style={{backgroundColor: theme.colors.main}}>
          <Subhead2 style={{color: 'white', marginVertical: 10}}>다음</Subhead2>
        </Button>
      </Row>
    </Center>
  );
}

const Button = styled.Pressable`
  width: 35%;
  border: 1px solid ${theme.colors.main};
  border-radius: 24px;
  align-items: center;
`;
