import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcon from '../common/SvgIcon';
import styled from 'styled-components';
import font from '../../styles/font';
import {theme} from '../../styles/theme';

export default function List({id, text, completed, _toggleTask}) {
  return (
    <Container>
      <font.title.Subhead3>{text}</font.title.Subhead3>
      <TouchableOpacity onPress={() => _toggleTask(id)}>
        {completed ? (
          <SvgIcon name="CheckedBox" size="24px" />
        ) : (
          <SvgIcon name="EmptyBox" size="24px" />
        )}
      </TouchableOpacity>
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
