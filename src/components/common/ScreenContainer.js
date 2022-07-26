import React from 'react';
import styled from 'styled-components/native';

const ScreenContainer = ({children}) => {
  return <Container>{children}</Container>;
};

export default ScreenContainer;

const Container = styled.ScrollView`
  background-color: white;
  padding: 12px 20px;
`;
