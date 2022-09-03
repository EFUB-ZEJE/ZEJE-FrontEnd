import React from 'react';
import styled from 'styled-components';
import {useUnRegisterDoneModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import {Body1, Body2, Subhead_long3} from '../../../styles/font';
import {theme} from '../../../styles/theme';
import {useNavigation} from '@react-navigation/native';
import {useKakaoLogin} from '../../../data/recoil/kakaoLogin/hooks/useKakaoLogin';

export default function UnRegisterDoneModal() {
  const navigation = useNavigation();
  const {isModalOpen, closeModal} = useUnRegisterDoneModal();
  const {signOutWithKakao} = useKakaoLogin();

  const onCloseHandler = () => {
    closeModal();
    signOutWithKakao();
    navigation.navigate('OnBoarding');
  };

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={onCloseHandler}>
      <ModalContainer>
        <Subhead_long3 color={theme.colors.main}>
          회원 탈퇴가 왼료되었습니다.
        </Subhead_long3>
        <Body1>ZEJE는 언제나</Body1>
        <Body2>당신을 기다립니다!</Body2>
      </ModalContainer>
    </ModalSheet>
  );
}
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;
