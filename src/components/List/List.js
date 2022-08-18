import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import SvgIcon from '../common/SvgIcon';
import styled from 'styled-components';
import font from '../../styles/font';
import {theme} from '../../styles/theme';

export default function List({
  mode,
  id,
  text,
  completed,
  _toggleTask,
  _deleteTask,
}) {
  var icon;
  if (mode == 'edit') {
    icon = (
      <TouchableOpacity onPress={() => _deleteTask(id)}>
        <SvgIcon name="Delete" size="24px" />
      </TouchableOpacity>
    );
  } else if (mode == 'view') {
    if (completed)
      icon = (
        <TouchableOpacity onPress={() => _toggleTask(id)}>
          <SvgIcon name="CheckedBox" size="24px" />
        </TouchableOpacity>
      );
    else
      icon = (
        <TouchableOpacity onPress={() => _toggleTask(id)}>
          <SvgIcon name="EmptyBox" size="24px" />
        </TouchableOpacity>
      );
  }
  return (
    <Container>
      <font.title.Subhead3>{text}</font.title.Subhead3>

      {icon}
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
