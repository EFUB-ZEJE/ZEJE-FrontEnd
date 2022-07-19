import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from '../../assets/images/Icon';
import {palette, theme} from '../../styles/theme';
import font from '../fonts/font';

const Container = styled.View`
  width: ${({width}) => (width - 40) / 2 - 10}px;
  height: 80px;
  background-color: ${palette.green100};

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 9px;
`;

export default function SmallBanner({text, onClick}) {
  const width = Dimensions.get('window').width;
  console.log(Icon);
  return (
    <Container width={width}>
      <font.title.Subhead2>{text}</font.title.Subhead2>
      <Image
        source={Icon.RightArrowIcon}
        style={{width: 24, height: 24, tintColor: palette.green300}}
      />
    </Container>
  );
}
