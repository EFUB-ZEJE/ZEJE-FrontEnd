/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';

export default function PhotoBanner({text, navigation, path, image}) {
  if (image == 'spot') {
    var image = (
      <ImageContainer
        source={require('../../assets/images/recommend_spot.png')}
      />
    );
  } else if (image == 'activity') {
    var image = (
      <ImageContainer
        source={require('../../assets/images/recommend_activity.png')}
      />
    );
  }

  return (
    <BoxContainer onPress={() => navigation.navigate(path)}>
      <Wrapper>
        <font.title.Subhead3>{text}</font.title.Subhead3>
        <SvgIcon name="RightArrow" color={theme.colors.black} />
      </Wrapper>
      <Empty />
      {image}
    </BoxContainer>
  );
}

const BoxContainer = styled.TouchableOpacity``;

const Empty = styled.View`
  width: 100%;
  height: 158px;
  border-radius: 10px;
`;

const ImageContainer = styled.Image`
  position: absolute;
  width: 100%;
  height: 170px;
  border-radius: 10px;
  opacity: 1;
`;

const Wrapper = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  z-index: 1;
`;
