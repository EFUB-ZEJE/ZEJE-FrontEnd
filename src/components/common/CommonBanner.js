import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import SvgIcon from './SvgIcon';

export default function CommonBanner({
  text,
  color,
  bgColor,
  onPress,
  border,

  borderColor,
}) {
  return (
    <Container
      bgColor={bgColor}
      onPress={onPress}
      border={border}
      borderColor={borderColor}>
      <font.title.Subhead3 color={color}>{text}</font.title.Subhead3>
      <SvgIcon name="RightArrow" color={color} />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'white')};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
  border: ${({border}) => (border ? '1px solid' : 'none')};
  border-color: ${({borderColor}) => (borderColor ? borderColor : 'white')};
`;
