import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {ScreenHeader, ScreenContainer} from '../../components';
import font, {Caption, Subhead3, Subhead2} from '../../styles/font';
import Profile from '../../components/home/MyPage/Profile';
import {palette, theme} from '../../styles/theme';
import {SizedBox} from '../../components';
export default function ProfileEditScreen({navigation}) {
  const [mode, setMode] = useState('view');
  const [text, setText] = useState('이펍');

  const _onSubmit = () => {
    // 닉네임 변경 요청
    // 닉네임 유효성 검사
    console.log('변경');
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="내 정보"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Profile type="edit" />
        <SizedBox height={40} />
        <Row>
          <View>
            <Caption>닉네임</Caption>
            <Subhead3>{text}</Subhead3>
            {/**  <TextInput
              value={text}
              placeholder="리스트를 입력해주세요."
              placeholderTextColor={palette.gray250}
              onChangeText={text => setText(text)}
              style={{color: 'black'}}
              onSubmitEditing={_onSubmit}
              autoCorrect={false}
              maxLength={10}
            />*/}
          </View>
          <TouchableOpacity onPress={() => console.log('닉네임을 변경합니다')}>
            <Subhead2 color={theme.colors.main}>변경</Subhead2>
          </TouchableOpacity>
        </Row>
        <Col>
          <Caption>비밀번호</Caption>
          <Subhead3>카카오 계정에서 변경하실 수 있습니다.</Subhead3>
        </Col>
        <Right>
          <Subhead2 color={theme.colors.main}>로그아웃 </Subhead2>
          <Subhead2 color={palette.gray200}> | </Subhead2>
          <Subhead2 color={palette.gray300}>회원탈퇴 </Subhead2>
        </Right>
      </ScreenContainer>
    </>
  );
}

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  height: 77px;
  border-bottom-color: ${theme.colors.divider};
`;

const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom-width: 1px;
  height: 77px;
  border-bottom-color: ${theme.colors.divider};
`;

const Right = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
`;
