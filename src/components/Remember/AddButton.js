/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../../components/common/SvgIcon';

export default function AddButton({text, icon, navigation, path}) {
  return (
    <Container onPress={() => navigation.navigate(path)}>
      <SvgIcon name={icon} size="24px" />
      <font.title.Subhead3 color={theme.colors.main}>
        {text}
      </font.title.Subhead3>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  height: 56px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.main};
  background-color: white;
  margin-bottom: 24px;
`;
