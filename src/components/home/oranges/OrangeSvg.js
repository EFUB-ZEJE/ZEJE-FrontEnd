import React from 'react';
import styled from 'styled-components/native';

import * as Oranges from '../../../assets/images/oranges';

const OrangeSvg = ({name}) => {
  const Comp = Oranges[name];

  return (
    <IconContainer>
      <Comp />
    </IconContainer>
  );
};

export default OrangeSvg;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
`;
