/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../../components/common/SvgIcon';

export default function AddButton({
  height,
  width,
  text,
  icon,
  type,
  navigation,
  handlefunction,
  path,
  display,
}) {
  const handleOnPress =
    type === 'navigate' ? () => navigation.navigate(path) : handlefunction;
  return (
    <Container
      width={width}
      height={height}
      dislay={display}
      onPress={handleOnPress}>
      <SvgIcon name={icon} size="24px" />
      <font.title.Subhead3 color={theme.colors.main}>
        {text}
      </font.title.Subhead3>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  height: ${props => props.height};
  width: ${props => props.width};
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: ${props => props.dislay}
  align-items: center;
  justify-content: center;
  border: 1px solid ${theme.colors.main};
  background-color: white;
  margin-bottom: 24px;
`;
