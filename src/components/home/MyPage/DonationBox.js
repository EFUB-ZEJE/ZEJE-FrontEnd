import React from 'react';
import {Caption, Subhead3, Body1} from '../../../styles/font';
import {palette, theme} from '../../../styles/theme';
import styled from 'styled-components';
import {useDonationDialogModalState} from '../../../modal/recoil/useModals';
import ShadowContainer from '../../common/ShadowContainer';
import {Column} from 'native-base';

function DonationBtn() {
  const {openModal} = useDonationDialogModalState();
  return (
    <StyledButton onPress={openModal}>
      <Body1 color={theme.colors.main}>기부처 보기</Body1>
    </StyledButton>
  );
}

export default function DonationBox({n}) {
  const borderRadius = 10;

  return (
    <ShadowContainer borderRadius={borderRadius}>
      <Container borderRadius={borderRadius}>
        <Column space={2}>
          <Caption color={palette.gray350}>기부한 귤 수</Caption>
          <Subhead3>{n}</Subhead3>
        </Column>
        <DonationBtn />
      </Container>
    </ShadowContainer>
  );
}

const StyledButton = styled.TouchableOpacity`
  border-color: ${theme.colors.main};
  border-width: 1px;
  border-radius: 20px;
  color: ${theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 4px 8px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  border-radius: ${props => props.borderRadius};
`;
