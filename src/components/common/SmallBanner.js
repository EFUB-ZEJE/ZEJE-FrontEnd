import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from '../../assets/images/Icon';
import {theme} from '../../styles/theme';

const Container = styled.View`
  width: ${({width}) => (width - 40) / 2 - 10}px;
  height: 80px;
  background-color: ${theme.colors.banner_bg};
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: 9px;
  background-color: ${theme.colors.small_banner_bg};
`;

const H3 = styled.Text`
  color: black;
  font-size: 14px;
  font-weight: 700;
`;

export default function SmallBanner({text, onClick}) {
  const width = Dimensions.get('window').width;
  console.log(Icon);
  return (
    <Container width={width}>
      <H3>{text}</H3>
      <Image
        source={Icon.RightArrowIcon}
        style={{width: 24, height: 24, tintColor: theme.colors.banner}}
      />
    </Container>
  );
}
