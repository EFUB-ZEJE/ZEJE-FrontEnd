import React from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';
import {saveData, getData} from '../../services/LocalStorage';

export default function LoginScreen({navigation}) {
  // 카카오 로그인
  const signInWithKakao = async () => {
    try {
      const token = await login();
      saveData('token', JSON.stringify(token));
      navigation.navigate('TabNavigator');
    } catch (err) {
      console.error('login err', err);
    }
  };

  //   // 카카오 로그아웃
  //   const signOutWithKakao = async () => {
  //     try {
  //       const message = await logout();
  //       setResult(message);
  //     } catch (err) {
  //       // eslint-disable-next-line no-console
  //       console.error('signOut error', err);
  //     }
  //   };

  //   // 프로필 불러오기
  //   const getProfile = async () => {
  //     try {
  //       const profile = await getKakaoProfile();

  //       setResult(JSON.stringify(profile));
  //     } catch (err) {
  //       // eslint-disable-next-line no-console
  //       console.error('signOut error', err);
  //     }
  //   };

  //   // 연동 해제
  //   const unlinkKakao = async () => {
  //     try {
  //       const message = await unlink();

  //       setResult(message);
  //     } catch (err) {
  //       // eslint-disable-next-line no-console
  //       console.error('signOut error', err);
  //     }
  //   };

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
