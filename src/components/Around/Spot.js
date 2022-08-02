import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {palette} from '../../styles/theme';
import font from '../../styles/font';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 62px;

  border-top-width: 1px;
  border-top-color: ${palette.gray150};
`;
export default function Spot({name, desc, location}) {
  return (
    <Container>
      <font.title.Subhead2>{name}</font.title.Subhead2>
      <font.body.Caption>{location}</font.body.Caption>
    </Container>
  );
}
