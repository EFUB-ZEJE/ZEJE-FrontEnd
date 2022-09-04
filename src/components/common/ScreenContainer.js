import React from 'react';
import styled from 'styled-components/native';
import SizedBox from './SizedBox';

const ScreenContainer = ({children, bgColor}) => {
  return (
    <Container bgColor={bgColor}>
      {children}
      <SizedBox height={30} />
    </Container>
  );
};

export default ScreenContainer;

const Container = styled.ScrollView`
  background-color: ${({bgColor}) => (bgColor ? bgColor : 'white')};
  padding: 16px 20px;
`;
