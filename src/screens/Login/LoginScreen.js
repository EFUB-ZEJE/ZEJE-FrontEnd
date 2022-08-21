import React from 'react';
import styled from 'styled-components/native';
import {Center} from 'native-base';
import {KakaoLoginButton, LogoLogin} from '../../assets';

export default function LoginScreen({navigation}) {
  return (
    <Center flex={1}>
      <LogoLogin />
      <ButtonWrapper>
        <KakaoLoginButton />
      </ButtonWrapper>
    </Center>
  );
}

const ButtonWrapper = styled.View`
  position: absolute;
  bottom: 50px;
`;
