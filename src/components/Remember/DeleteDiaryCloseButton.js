import React from 'react';
import styled from 'styled-components/native';
import font from '../../styles/font';
import {theme} from '../../styles/theme';

export default function DeleteDiaryCloseButton({onPress}) {
  return (
    <Pressable onPress={() => onPress()}>
      <font.title.Subhead2 color={'white'}>삭제</font.title.Subhead2>
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
