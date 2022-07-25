import {Text} from 'native-base';
import React from 'react';

export const Subhead1 = ({children, style}) => {
  return (
    <Text
      fontWeight={700}
      fontSize={12}
      lineHeight={18}
      letterSpacing={-0.3}
      style={style}>
      {children}
    </Text>
  );
};

export const Subhead3 = ({children, style}) => {
  return (
    <Text
      fontWeight={700}
      fontSize={16}
      lineHeight={22}
      letterSpacing={-0.3}
      style={style}>
      {children}
    </Text>
  );
};
