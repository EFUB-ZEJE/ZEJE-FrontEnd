import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme.js';
import SvgIcon from './SvgIcon.js';

const SearchBar = ({placeholder, handleChange}) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder={placeholder}
        onChangeText={text => handleChange(text)}
        // returnKeyLabel 적용 안 되는 것 같음...
        returnKeyLabel="검색"
      />
      <SvgIcon name="Search" />
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.View`
  flex-direction: row;
  background-color: ${theme.colors.search};
  width: 100%;
  height: 50px;
  border-radius: 10px;
  padding: 0 13px 0 20px;
  align-items: center;
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
