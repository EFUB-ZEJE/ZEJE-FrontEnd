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

export default function LoginScreen({navigation}) {
  const [isLoading, setIsLoading] = useState(true);
  const {kakaoSignin, kakaoLoginResponse, signInWithKakao, getProfile} =
    useKakaoLogin();
  const [toSChecked, setToSChecked] = useState(false);
  const {openModal} = useToSNotCheckedModal();

  const onPressHandler = () => {
    if (toSChecked) {
      signInWithKakao();
    } else {
      openModal();
    }
  };

  const storeToken = async token => {
    await saveData(ACCESS_TOKEN, token);
  };

  const autoLogin = async () => {
    const isInstalled = await getData(IS_INSTALLED);

    if (isInstalled == 'true' && kakaoLoginResponse.id != '') {
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
    setIsLoading(true);
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
