import React from 'react';
import styled from 'styled-components/native';
import {Subhead2} from '../../styles/font';
import {theme} from '../../styles/theme';

export default function ModalButton({onPress, text, white, width, outline}) {
  return (
    <Pressable
      onPress={() => onPress()}
      white={white}
      width={width}
      outline={outline}>
      <Subhead2 color={white ? theme.colors.main : 'white'}>{text}</Subhead2>
    </Pressable>
  );
}

const Pressable = styled.TouchableOpacity`
  width: ${props => (props.width ? props.width : '100%')};
  height: 48px;
  border-radius: 24px;
  background-color: ${props => (props.white ? 'white' : theme.colors.main)};
  justify-content: center;
  align-items: center;

  border-width: ${({outline}) => (outline ? '2px' : '0px')};
  border-color: ${({outline}) => (outline ? theme.colors.main : 'white')};
`;
