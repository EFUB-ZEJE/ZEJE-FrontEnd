/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, FlatList, View, Text} from 'react-native';
import styled from 'styled-components/native';
import {palette} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';
import NewDiaryCard from './NewDiaryCard';

const DiaryCardList = ({diaries, handlePress}) => {
  return (
    <BoxContainer>
      {diaries.map(d => (
        <NewDiaryCard name={d.name} id={d.diaryId} handlePress={handlePress} />
      ))}
    </BoxContainer>
  );
};

export default DiaryCardList;

const BoxContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
