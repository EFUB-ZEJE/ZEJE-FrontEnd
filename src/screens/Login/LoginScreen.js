import React from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <Center flex={1}>
      <LogoLogin />
      <ButtonWrapper
        onPress={() => {
          navigation.navigate('TabNavigator');
        }}>
        <KakaoLoginButton />
      </ButtonWrapper>
    </Center>
  );
}

const ButtonWrapper = styled.Pressable`
  position: absolute;
  bottom: 50px;
`;
