import React, {useState} from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Text, Image, TouchableOpacity} from 'react-native';
import DonationDialogModal from '../../modal/modals/Home/DonationDialogModal';
import Profile from '../../components/home/MyPage/Profile';
import UserInfo from '../../components/home/MyPage/UserInfo';
import DonationBox from '../../components/home/MyPage/DonationBox';
import Menu from '../../components/home/MyPage/Menu';
import SvgIcon from '../../components';
import styled from 'styled-components';
import {SizedBox} from '../../components';
import LogoutModal from '../../modal/modals/Home/LogoutModal';
import {
  useLogoutModal,
  useUnRegisterCheckModal,
  useUnRegisterDoneModal,
} from '../../modal/recoil/useModals';
import font, {Subhead2} from '../../styles/font';
import {theme, palette} from '../../styles/theme';
export default function MypageMainScreen({navigation}) {
  const [userInfo, setUserInfo] = useState({
    userId: 2,
    nickname: '이펍',
    email: 'efub@naver.com',
    profileUrl: null,
    fruitBox: 0,
  });
  const {openModal: openLogoutModal} = useLogoutModal();
  const {openModal: openUnRegisterCheckModal} = useUnRegisterCheckModal();

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="마이페이지"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Profile type="view" />
        <SizedBox height={40} />
        <UserInfo
          name={userInfo.nickname}
          email={userInfo.email}
          onPress={() => navigation.navigate('ProfileEdit')}
        />
        <DonationBox n={userInfo.fruitBox} />
        <SizedBox height={24} />
        <Menu navigation={navigation} />
        <Right>
          <TouchableOpacity onPress={openLogoutModal}>
            <Subhead2 color={theme.colors.main}>로그아웃 </Subhead2>
          </TouchableOpacity>
          <Subhead2 color={palette.gray200}> | </Subhead2>
          <TouchableOpacity onPress={openUnRegisterCheckModal}>
            <Subhead2 color={palette.gray300}>회원탈퇴 </Subhead2>
          </TouchableOpacity>
        </Right>
      </ScreenContainer>
      <LogoutModal />
      <DonationDialogModal />
    </>
  );
}
const Right = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
`;
