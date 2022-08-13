import React from 'react';
import styled from 'styled-components/native';
import {Subhead2} from '../../styles/font';
import {theme} from '../../styles/theme';

export default function CommonButton({onPress, text}) {
  return (
    <Pressable onPress={() => onPress()}>
      <Subhead2 color={'white'}>{text}</Subhead2>
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  background-color: ${theme.colors.main};
  justify-content: center;
  align-items: center;
`;
