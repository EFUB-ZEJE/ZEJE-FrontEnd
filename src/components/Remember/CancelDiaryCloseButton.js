import React from 'react';
import styled from 'styled-components/native';
import font from '../../styles/font';
import {palette} from '../../styles/theme';

export default function CloseDiaryCloseButton({onPress}) {
  return (
    <Pressable onPress={() => onPress()}>
      <font.title.Subhead2 color={palette.orange}>취소</font.title.Subhead2>
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`;
