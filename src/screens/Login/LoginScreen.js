import React from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import {useLoginAPI} from '../../feature/api/login/useLoginAPI';

export default function LoginScreen({navigation}) {
  const {kakaoLoginResponse, signInWithKakao, getProfile} = useKakaoLogin();
  const {loginAPI} = useLoginAPI();
  const loginHandler = () => {
    signInWithKakao();
    getProfile();
  };
  if (kakaoLoginResponse.id !== '') loginAPI(kakaoLoginResponse, navigation);

  return (
    <Center flex={1}>
      <LogoLogin />
      <ButtonWrapper onPress={() => loginHandler()}>
        <KakaoLoginButton />
      </ButtonWrapper>
    </Center>
  );
}

const ButtonWrapper = styled.Pressable`
  position: absolute;
  bottom: 50px;
`;
