import React from 'react';
import styled from 'styled-components/native';

import * as Icons from '../../assets/icons';

const SvgIcon = ({name, size, color}) => {
  const Comp = Icons[name];

  return (
    <IconContainer size={size}>
      <Comp color={color} />
    </IconContainer>
  );
};

export default SvgIcon;

const IconContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: ${props => (props.size ? props.size : '36px')};
  width: ${props => (props.size ? props.size : '36px')};
`;
