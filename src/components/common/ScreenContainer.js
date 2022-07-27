import React from 'react';
import styled from 'styled-components/native';
import SizedBox from './SizedBox';

const ScreenContainer = ({children}) => {
  return (
    <Container>
      {children}
      <SizedBox height={30} />
    </Container>
  );
};

export default ScreenContainer;

const Container = styled.ScrollView`
  background-color: white;
  padding: 16px 20px;
`;
