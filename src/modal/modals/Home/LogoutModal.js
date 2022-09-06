import React from 'react';
import styled from 'styled-components';
import {useLogoutModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import ModalButton from '../../../components/home/ModalButton';
import {Subhead3} from '../../../styles/font';
import {useKakaoLogin} from '../../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import {useNavigation} from '@react-navigation/native';

export default function LogoutModal() {
  const {isModalOpen, closeModal} = useLogoutModal();
  const {signOutWithKakao} = useKakaoLogin();
  const navigation = useNavigation();

  const _logout = () => {
    signOutWithKakao();
    navigation.navigate('Login');
    closeModal();
  };
  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <ModalContainer>
        <Subhead3>로그아웃 하시겠어요?</Subhead3>
        <Row>
          <ModalButton
            onPress={_logout}
            text={'예'}
            white
            width={'110px'}
            outline
          />
          <ModalButton onPress={closeModal} text={'아니요'} width={'110px'} />
        </Row>
      </ModalContainer>
    </ModalSheet>
  );
}
const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 136px;
  padding: 16px;
`;
const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 232px;
`;
