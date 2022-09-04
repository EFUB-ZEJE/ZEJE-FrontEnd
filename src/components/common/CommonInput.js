import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme.js';

const CommonInput = ({placeholder, handleChange, handleSubmit, bigger}) => {
  return (
    <SearchContainer bigger={bigger}>
      {bigger ? (
        <BiggerSearchInput
          placeholder={placeholder}
          onChangeText={text => handleChange(text)}
          returnKeyLabel="완료"
          multiline={true}
        />
      ) : (
        <SearchInput
          placeholder={placeholder}
          onChangeText={text => handleChange(text)}
          returnKeyLabel="완료"
        />
      )}
    </SearchContainer>
  );
};

export default CommonInput;

const SearchContainer = styled.View`
  flex-direction: column;
  background-color: ${theme.colors.search};
  width: 100%;
  height: ${({bigger}) => (bigger ? '300px' : '50px')};
  border-radius: 10px;
  padding: 0 13px 0 20px;
  justify-content: space-between;
`;

const SearchInput = styled.TextInput`
  font-weight: 400;
  color: ${theme.colors.font};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  ::placeholder {
    color: ${theme.colors.searchText};
  }
`;

const BiggerSearchInput = styled.TextInput`
  font-weight: 400;
  overflow: scroll;
  color: ${theme.colors.font};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  ::placeholder {
    color: ${theme.colors.searchText};
  }
`;
