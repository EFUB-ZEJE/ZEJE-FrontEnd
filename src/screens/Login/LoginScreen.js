import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import AuthService from '../../services/AuthService';
import {ACCESS_TOKEN, saveData} from '../../data/LocalStorage';
import CheckToS from '../../components/Login/CheckToS';

export default function LoginScreen({navigation}) {
  const {kakaoLoginResponse, signInWithKakao, getProfile} = useKakaoLogin();
  const [tosChecked, setTosChecked] = useState(false);

  const loginHandler = () => {
    signInWithKakao();
    getProfile();
  };
  if (kakaoLoginResponse.id !== '') {
    AuthService.getAccessToken(kakaoLoginResponse)
      .then(res => {
        saveData(ACCESS_TOKEN, res.data);
        navigation.navigate('TabNavigator');
      })
      .catch(err => console.error(err));
  }

  return (
    <Center flex={1}>
      <LogoLogin />
      <CheckToS
        onPress={() => {
          navigation.navigate('ToSDetail');
        }}
        tosChecked={tosChecked}
        setTosChecked={setTosChecked}
      />
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
