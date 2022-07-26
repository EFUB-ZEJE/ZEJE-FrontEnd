import React from 'react';
import styled from 'styled-components/native';

import * as Icons from '../../assets/icons';

const SvgIcon = ({name, props}) => {
  const Comp = Icons[name];

  return (
    <IconContainer>
      <Comp {...props} />
    </IconContainer>
  );
};

export default SvgIcon;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
`;