import {View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from '../../assets/images/Icon';
import {theme, palette} from '../../styles/theme';
import font from '../fonts/font';

const Container = styled.View`
  width: ${({width}) => (width - 40) / 2 - 10}px;
  height: 80px;
  border-radius: 15px;
  background-color: ${palette.orange100};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 9px;
`;

export default function SmallBanner({text, onClick, iconSrc}) {
  const width = Dimensions.get('window').width;
  console.log(Icon);
  return (
    <Container width={width}>
      <Image
        source={iconSrc}
        style={{
          width: 24,
          height: 24,
          tintColor: theme.colors.main,
          marginRight: 12,
        }}
      />
      <font.title.Subhead3 color={theme.colors.main}>
        {text}
      </font.title.Subhead3>
    </Container>
  );
}
