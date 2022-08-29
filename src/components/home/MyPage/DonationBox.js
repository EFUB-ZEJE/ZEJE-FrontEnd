import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import DropShadow from 'react-native-drop-shadow';
import font, {Caption, Subhead3, Body1} from '../../../styles/font';
import {palette, theme} from '../../../styles/theme';
import styled from 'styled-components';
import SizedBox from '../../common/SizedBox';
import {useDonationDialogModalState} from '../../../modal/recoil/useModals';

function DonationBtn() {
  const {openModal, closeModal} = useDonationDialogModalState();
  return (
    <StyledButton onPress={openModal}>
      <Body1 color={theme.colors.main}>기부처 보기</Body1>
    </StyledButton>
  );
}

export default function DonationBox({n}) {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 5,
      }}>
      <Text>DonationBox</Text>
      <Container>
        <SubContainer>
          <Caption color={palette.gray350}>기부한 귤 수</Caption>
          <SizedBox height={10} />
          <Subhead3>{n}</Subhead3>
        </SubContainer>
        <DonationBtn />
      </Container>
    </DropShadow>
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
  width: 70px;
  height: 35px;
  padding: 4px;
`;

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const SubContainer = styled.View`
  display: flex;
  flex-direction: column;
`;
