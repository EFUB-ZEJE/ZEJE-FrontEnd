import React from 'react';

import styled from 'styled-components';
import {Subhead2} from '../../styles/font';

import {theme} from '../../styles/theme';

export default function CommonButton({onPress, text, bgColor, color}) {
  return (
    <Pressable onPress={onPress} bgColor={bgColor}>
      <Subhead2 color={color}>{text}</Subhead2>
    </Pressable>
  );
}

const Pressable = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  background-color: ${({bgColor}) => bgColor};
  justify-content: center;
  align-items: center;
`;
