import {View, Text} from 'react-native';

import {Body2, Subhead2} from '../../styles/font';
import {Column, Divider} from 'native-base';
import React from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Body1, Body_long2, Caption} from '../../styles/font';

export default function InfoScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="이용 약관"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Subhead2>수집·이용 목적</Subhead2>
        <Body2>
          회원가입을 위한 본인 확인 및 ZEJE 서비스 제공 만 14세 이상 고객만 가입
          가능합니다. ZEJE는 본 어플리케이션의 목적에 따라 만 14세 미만 미동의
          회원가입을 제한하고 있습니다.
        </Body2>
        <Subhead2>수집·이용 항목</Subhead2>
        <Body2>닉네임(필수), 프로필사진(필수), 이메일(선택)</Body2>
        <Subhead2>보유·이용 기간</Subhead2>
        <Body2>위 개인정보는 회원 탈퇴 시까지 보유·이용됩니다.</Body2>
        <Subhead2>동의·거부할 권리 및 동의를 거부할 경우 불이익</Subhead2>
        <Body2>
          위 개인정보의 수집·이용에 관한 동의는 ZEJE 서비스 가입을 위해
          필수이므로, 동의하지 않으실 경우 본 서비스를 이용할 수 없습니다.
        </Body2>
      </ScreenContainer>
    </>
  );
}
