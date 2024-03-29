import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import AuthService from '../../services/AuthService';
import {
  ACCESS_TOKEN,
  getData,
  IS_INSTALLED,
  saveData,
} from '../../data/LocalStorage';
import Spinner from 'react-native-loading-spinner-overlay';
import {theme} from '../../styles/theme';
import CheckToS from '../../components/Login/CheckToS';
import {useToSNotCheckedModal} from '../../modal/recoil/useModals';
import CheckInfo from '../../components/Login/CheckInfo';

export default function LoginScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const {kakaoSignin, kakaoLoginResponse, signInWithKakao, getProfile} =
    useKakaoLogin();
  const {openModal} = useToSNotCheckedModal();
  const [toSChecked, setToSChecked] = useState(false);
  const [infoChecked, setInfoChecked] = useState(false); // 개인정보

  const onPressHandler = () => {
    if (toSChecked && infoChecked) {
      signInWithKakao();
    } else {
      openModal();
    }
  };

  const storeToken = async token => {
    await saveData(ACCESS_TOKEN, token);
  };

  const autoLogin = async () => {
    setIsLoading(true);
    if (kakaoLoginResponse.id != '') {
      AuthService.getAccessToken(kakaoLoginResponse)
        .then(res => {
          storeToken(res.data);
          saveData(ACCESS_TOKEN, res.data);
          saveData(IS_INSTALLED, 'true');
          setIsLoading(false);
          navigation.navigate('TabNavigator');
        })
        .catch(err => console.error(err));
      setIsLoading(false);
      navigation.navigate('TabNavigator');
    } else {
      getProfile();
      setIsLoading(false);
    }
  };

  useEffect(() => {
    autoLogin();
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

        {!kakaoSignin && (
          <>
            <CheckToS
              onPress={() => {
                navigation.navigate('ToSDetail');
              }}
              toSChecked={toSChecked}
              setToSChecked={setToSChecked}
            />
            <CheckInfo
              onPress={() => {
                navigation.navigate('Info');
              }}
              toSChecked={infoChecked}
              setToSChecked={setInfoChecked}
            />
            <ButtonWrapper onPress={() => onPressHandler()}>
              <KakaoLoginButton />
            </ButtonWrapper>
          </>
        )}
      </Center>
    </>
  );
}

const ButtonWrapper = styled.Pressable`
  position: absolute;
  bottom: 50px;
`;
