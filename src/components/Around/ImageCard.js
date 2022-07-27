/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import font from '../../styles/font.js';
import DropShadow from 'react-native-drop-shadow';
import SvgIcon from '../common/SvgIcon';

// DropShadow 해결 방법 찾는 중
const ImageCard = ({id, title, address, liked, handleLike}) => {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 5,
      }}>
      <BoxContainer>
        <ImageContainer source={require('../../assets/images/sample.jpeg')} />
        <TextContainer>
          <View>
            <font.title.Subhead2>{title}</font.title.Subhead2>
            <font.body.Caption>{address}</font.body.Caption>
          </View>
          {liked ? (
            <TouchableOpacity onPress={() => handleLike(id)}>
              <SvgIcon name="HeartFilled" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => handleLike(id)}>
              <SvgIcon name="HeartOutline" />
            </TouchableOpacity>
          )}
        </TextContainer>
      </BoxContainer>
    </DropShadow>
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
