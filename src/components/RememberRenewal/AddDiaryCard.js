/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {palette} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';

const AddDiaryCard = ({handlePress}) => {
  const width = Dimensions.get('window').width;

  return (
    <BoxContainer width={width}>
      <CardContainer width={width} onPress={() => handlePress()}>
        <font.title.Subhead3 color={palette.gray250}>
          일기장 추가
        </font.title.Subhead3>
      </CardContainer>
    </BoxContainer>
  );
};

export default AddDiaryCard;

const BoxContainer = styled.View`
  width: ${({width}) => (width - 40) / 2}px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const CardContainer = styled.TouchableOpacity`
  width: ${({width}) => (width - 40) / 2 - 8}px;
  height: 150px;
  border-radius: 10px;
  background-color: ${palette.gray100};
  display: flex;
  align-items: center;
  justify-content: center;
`;
