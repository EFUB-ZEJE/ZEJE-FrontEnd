import React from 'react';
import styled from 'styled-components/native';

const FilterList = ({children}) => {
  return <Container>{children}</Container>;
};

export default FilterList;

const Container = styled.View`
  flex-direction: row;
`;
