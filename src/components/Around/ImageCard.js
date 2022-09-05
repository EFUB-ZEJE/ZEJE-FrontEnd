/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import font from '../../styles/font.js';

import SvgIcon from '../common/SvgIcon';

// DropShadow 해결 방법 찾는 중
const ImageCard = ({
  id,
  title,
  address,
  liked,
  handleLike,
  image,
  navigation,
}) => {
  return (
    <BoxContainer
      onPress={() => navigation.navigate('TourDetail', {spotId: id})}>
      {image ? (
        <ImageContainer source={{uri: image}} />
      ) : (
        <ImageContainer source={require('../../assets/images/thumbnail.png')} />
      )}

      <TextContainer>
        <View>
          <font.title.Subhead2>{title}</font.title.Subhead2>
          <font.body.Caption>{address}</font.body.Caption>
        </View>

        <TouchableOpacity onPress={() => handleLike(id)}>
          {liked ? (
            <SvgIcon name="HeartFilled" />
          ) : (
            <SvgIcon name="HeartOutline" />
          )}
        </TouchableOpacity>
      </TextContainer>
    </BoxContainer>
  );
};

export default ImageCard;

const BoxContainer = styled.TouchableOpacity`
  padding-bottom: 16px;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 180px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextContainer = styled.View`
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
`;
