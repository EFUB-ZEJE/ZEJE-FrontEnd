import React from 'react';
import styled from 'styled-components';
import font from '../../styles/font';
import {RightArrow} from '../../assets/icons';

export default function CommonBanner({text, color, bgColor, navigation, path}) {
  return (
    <Container bgColor={bgColor} onPress={() => navigation.navigate(path)}>
      <font.title.Subhead3 color={color}>{text}</font.title.Subhead3>
      <RightArrow color={color} />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
`;
