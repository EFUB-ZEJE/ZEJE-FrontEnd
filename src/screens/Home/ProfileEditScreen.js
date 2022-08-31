import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {ScreenHeader, ScreenContainer} from '../../components';
import font, {Caption, Subhead3, Subhead2} from '../../styles/font';
import Profile from '../../components/home/MyPage/Profile';
import {palette, theme} from '../../styles/theme';
import {SizedBox} from '../../components';
import MyPageService from '../../services/MyPageService';
export default function ProfileEditScreen({navigation, route}) {
  let userInfo = route.params;

  const [text, setText] = useState(userInfo.nickname);
  const [image, setImage] = useState({
    fileName:
      'rn_image_picker_lib_temp_681d5195-face-4c51-be5e-682545844bb7.jpg',
    fileSize: 497446,
    height: 2280,
    type: 'image/jpeg',
    uri: userInfo.profileUrl,
    width: 1080,
  });

  const _onSave = async () => {
    if (text == '') {
      return;
    }

    console.log('변경');
    var body = new FormData();

    body.append('nickname', text);
    body.append('uploadFile', image.uri);

    MyPageService.editProfile(body)
      .then(res => {
        if (res.status == 200) {
          console.log('success editing profile');

          Alert.alert('알림', '저장되었습니다', [
            {
              text: '확인',
              style: 'default',
            },
          ]);
        } else {
          console.log('failed editing profile');

          Alert.alert('알림', '저장에 실패하였습니다', [
            {
              text: '확인',
              style: 'default',
            },
          ]);
        }
      })
      .catch(err => console.log(err));
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
        <Profile type="edit" uri={image.uri} setImage={setImage} />
        <SizedBox height={40} />
        <Row>
          <View>
            <Caption>닉네임</Caption>
            <SizedBox height={10} />
            <TextInput
              value={text}
              placeholder="닉네임을 입력해주세요"
              placeholderTextColor={palette.gray250}
              onChangeText={text => setText(text)}
              style={{
                color: 'black',
                height: 22,
                fontSize: 16,
                fontWeight: 'bold',
                padding: 0,
              }}
              autoCorrect={false}
              maxLength={10}
            />
          </View>
        </Row>
        <Col>
          <Caption>비밀번호</Caption>
          <SizedBox height={10} />
          <Subhead3>카카오 계정에서 변경하실 수 있습니다.</Subhead3>
        </Col>
        <Right>
          <TouchableOpacity onPress={_onSave}>
            <Subhead2 color={theme.colors.main}>저장</Subhead2>
          </TouchableOpacity>
        </Right>
      </ScreenContainer>
    </>
  );
}

const Right = styled.View`
  display: flex;
  padding-top: 15px;
  flex-direction: row;
  justify-content: flex-end;
`;
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
