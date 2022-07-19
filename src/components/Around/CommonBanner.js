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
  background-color: ${theme.colors.main};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export default function CommonBanner({text, onClick}) {
  const width = Dimensions.get('window').width;
  console.log(Icon);
  return (
    <Container width={width}>
      <Image source={Icon.SproutIcon} style={{width: 43, height: 43}} />
      <font.title.Subhead_long3 color={'white'}>
        {text}
      </font.title.Subhead_long3>
      <Image
        source={Icon.RightArrowIcon}
        style={{width: 24, height: 24, marginLeft: 30}}
      />
    </Container>
  );
}
