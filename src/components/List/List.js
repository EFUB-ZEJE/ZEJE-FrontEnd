import {View, Text} from 'react-native';
import React from 'react';
import SvgIcon from '../common/SvgIcon';
import styled from 'styled-components';
import font from '../../styles/font';
import {theme} from '../../styles/theme';

export default function List({text, completed}) {
  return (
    <Container>
      <font.title.Subhead3>{text}</font.title.Subhead3>
      {completed ? (
        <SvgIcon name="CheckedBox" size="24px" />
      ) : (
        <SvgIcon name="EmptyBox" size="24px" />
      )}
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.divider};
`;
