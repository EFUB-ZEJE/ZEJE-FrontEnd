import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import {theme, palette} from '../../styles/theme';
import font from '../../styles/font.js';
import {SvgIcon, SizedBox} from '../../components';

export default function SmallBanner({text, icon, onPress, color, bgColor}) {
  const width = Dimensions.get('window').width;

  return (
    <Container width={width} onPress={onPress} bgColor={bgColor}>
      {icon == 'Heart' && bgColor == theme.colors.main ? (
        <SvgIcon name={'WhiteHeart'} size="24px" />
      ) : (
        <SvgIcon name={icon} size="24px" />
      )}
      <SizedBox width={9} />
      <font.title.Subhead3 color={color}>{text}</font.title.Subhead3>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: ${({width}) => (width - 40) / 2 - 8}px;
  height: 56px;
  border-radius: 10px;
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'white')};

  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`;
