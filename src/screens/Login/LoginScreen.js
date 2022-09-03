import React, {useEffect} from 'react';
import styled from 'styled-components/native';
import {Center, Pressable} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import AuthService from '../../services/AuthService';
import {ACCESS_TOKEN, saveData} from '../../data/LocalStorage';

export default function LoginScreen({navigation}) {
  const {kakaoSignin, kakaoLoginResponse, signInWithKakao, getProfile} =
    useKakaoLogin();

  useEffect(() => {
    if (kakaoLoginResponse.id !== '' && kakaoSignin) {
      AuthService.getAccessToken(kakaoLoginResponse)
        .then(res => {
          saveData(ACCESS_TOKEN, res.data);
          navigation.navigate('TabNavigator');
        })
        .catch(err => console.error(err));
    } else {
      getProfile();
    }
  }, [kakaoLoginResponse.id, kakaoSignin]);

  return (
    <Center flex={1}>
      <LogoLogin />
      <ButtonWrapper onPress={() => signInWithKakao()}>
        <KakaoLoginButton />
      </ButtonWrapper>
    </Center>
  );
}

const ButtonWrapper = styled.Pressable`
  position: absolute;
  bottom: 50px;
`;
