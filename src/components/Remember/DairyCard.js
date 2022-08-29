/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import font from '../../styles/font.js';
import DropShadow from 'react-native-drop-shadow';
import SvgIcon from '../common/SvgIcon';

// DropShadow 해결 방법 찾는 중
const DiaryCard = ({id, title, date, openModal}) => {
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
            <font.body.Caption>{date}</font.body.Caption>
          </View>
          <TouchableOpacity onPress={openModal}>
            <SvgIcon name="Trash" />
          </TouchableOpacity>
        </TextContainer>
      </BoxContainer>
    </DropShadow>
  );
};

export default DiaryCard;

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
