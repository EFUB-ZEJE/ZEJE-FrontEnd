/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {palette} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';
import DropShadow from 'react-native-drop-shadow';

const NewDiaryCard = ({handlePress, id, name}) => {
  const width = Dimensions.get('window').width;
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
      <BoxContainer width={width}>
        <CardContainer width={width} onPress={() => handlePress(id, name)}>
          <ImageContainer
            source={require('../../assets/images/thumbnail.png')}
          />
          <TextContainer>
            <font.title.Subhead2 color={palette.gray600}>
              {name}
            </font.title.Subhead2>
            <SvgIcon name="More" />
          </TextContainer>
        </CardContainer>
      </BoxContainer>
    </DropShadow>
  );
};

export default NewDiaryCard;

const BoxContainer = styled.View`
  padding-bottom: 16px;
  width: ${({width}) => (width - 40) / 2}px;
`;

const CardContainer = styled.TouchableOpacity`
  width: ${({width}) => (width - 40) / 2 - 8}px;
  height: 150px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.Image`
  height: 100px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextContainer = styled.View`
  background-color: white;
  height: 50px;
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
