import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme.js';
import SizedBox from '../common/SizedBox.js';
import font from '../../styles/font.js';

const FilterBox = ({id, title, activated, handlePress}) => {
  return (
    <>
      {activated ? (
        <True onPress={() => handlePress(id)}>
          <font.body.Body1 color="white">{title}</font.body.Body1>
        </True>
      ) : (
        <False onPress={() => handlePress(id)}>
          <font.body.Body1 color={theme.colors.main}>{title}</font.body.Body1>
        </False>
      )}
      <SizedBox width={7} />
    </>
  );
};

export default FilterBox;

const True = styled.TouchableOpacity`
  background-color: ${theme.colors.main};
  border: 1px solid ${theme.colors.main};
  height: 26px;
  border-radius: 16px;
  padding: 0 14px;
  justify-content: center;
`;

const False = styled.TouchableOpacity`
  height: 26px;
  border: 1px solid ${theme.colors.main};
  border-radius: 16px;
  padding: 0 14px;
  justify-content: center;
`;
