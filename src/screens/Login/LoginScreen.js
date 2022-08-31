import React from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import AuthService from '../../services/AuthService';
import {storeToken} from '../../data/LocalStorage';

export default function LoginScreen({navigation}) {
  const {kakaoLoginResponse, signInWithKakao, getProfile} = useKakaoLogin();
  const loginHandler = () => {
    signInWithKakao();
    getProfile();
  };
  if (kakaoLoginResponse.id !== '') {
    AuthService.getAccessToken(kakaoLoginResponse)
      .then(res => {
        storeToken(res.data);
        navigation.navigate('TabNavigator');
      })
      .catch(err => console.error(err));
  }

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
