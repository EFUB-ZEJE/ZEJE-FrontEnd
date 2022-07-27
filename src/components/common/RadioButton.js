import React from 'react';
import styled from 'styled-components/native';
import SvgIcon from '../common/SvgIcon';
import font from '../../styles/font.js';

const RadioButton = ({id, label, activated, handlePress}) => {
  return (
    <Container onPress={() => handlePress(id)}>
      {activated ? (
        <>
          <SvgIcon name="RadioTrue" />
          <font.title.Subhead2>{label}</font.title.Subhead2>
        </>
      ) : (
        <>
          <SvgIcon name="RadioFalse" />
          <font.title.Subhead2>{label}</font.title.Subhead2>
        </>
      )}
    </Container>
  );
};

export default RadioButton;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
