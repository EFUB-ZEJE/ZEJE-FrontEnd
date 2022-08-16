import React from 'react';
import styled from 'styled-components/native';
import {Subhead2} from '../../styles/font';
import {theme} from '../../styles/theme';

export default function ModalButton({onPress, text, white}) {
  return (
    <Pressable onPress={() => onPress()} white={white}>
      <Subhead2 color={white ? theme.colors.main : 'white'}>{text}</Subhead2>
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  background-color: ${props => (props.white ? 'white' : theme.colors.main)};
  justify-content: center;
  align-items: center;
`;
