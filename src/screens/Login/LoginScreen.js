import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import AuthService from '../../services/AuthService';
import {ACCESS_TOKEN, saveData} from '../../data/LocalStorage';
import Spinner from 'react-native-loading-spinner-overlay';
import {theme} from '../../styles/theme';

export default function LoginScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(false);
  const {kakaoSignin, kakaoLoginResponse, signInWithKakao, getProfile} =
    useKakaoLogin();

  useEffect(() => {
    if (kakaoLoginResponse.id !== '' && kakaoSignin) {
      setIsLoading(true);
      AuthService.getAccessToken(kakaoLoginResponse)
        .then(res => {
          saveData(ACCESS_TOKEN, res.data);
          setIsLoading(false);
          navigation.navigate('TabNavigator');
        })
        .catch(err => console.error(err));
    } else {
      getProfile();
    }
  }, [kakaoLoginResponse.id, kakaoSignin]);

  return (
    <>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
      <Center flex={1}>
        <LogoLogin />
        <ButtonWrapper onPress={() => signInWithKakao()}>
          <KakaoLoginButton />
        </ButtonWrapper>
      </Center>
    </>
  );
}

const ButtonWrapper = styled.Pressable`
  position: absolute;
  bottom: 50px;
`;
