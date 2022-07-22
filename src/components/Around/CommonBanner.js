import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from '../../assets/images/Icon';
import {theme} from '../../styles/theme';
import font from '../fonts/font';
const Container = styled.View`
  width: 100%;
  height: 80px;
  background-color: ${({bgColor}) => bgColor};
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
`;

export default function CommonBanner({text, onClick, color, bgColor}) {
  const width = Dimensions.get('window').width;
  console.log(Icon);
  return (
    <Container width={width} bgColor={bgColor}>
      <font.title.Subhead3 color={color}>{text}</font.title.Subhead3>
      <Image
        source={Icon.RightArrowIcon}
        style={{width: 24, height: 24, marginLeft: 30, tintColor: color}}
      />
    </Container>
  );
}
