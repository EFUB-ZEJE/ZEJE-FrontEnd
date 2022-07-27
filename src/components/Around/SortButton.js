import React from 'react';
import styled from 'styled-components/native';
import {theme} from '../../styles/theme.js';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';

const SortButton = ({sortBy, handlePress}) => {
  return (
    <Container onPress={() => handlePress()}>
      <SvgIcon name="Sort" />
      <font.title.Subhead2 color={theme.colors.main}>
        {sortBy}
      </font.title.Subhead2>
    </Container>
  );
};

export default SortButton;

const Container = styled.TouchableOpacity`
  flex-direction: row;
  height: 48px;
  width: 100px;
  align-items: center;
`;
