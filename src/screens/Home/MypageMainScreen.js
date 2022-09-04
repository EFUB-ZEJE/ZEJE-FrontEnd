import React, {useEffect, useState} from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Pressable} from 'react-native';
import Profile from '../../components/home/MyPage/Profile';
import UserInfo from '../../components/home/MyPage/UserInfo';
import DonationBox from '../../components/home/MyPage/DonationBox';
import Menu from '../../components/home/MyPage/Menu';
import styled from 'styled-components';
import {SizedBox} from '../../components';
import {
  useLogoutModal,
  useUnRegisterCheckModal,
} from '../../modal/recoil/useModals';
import {Subhead2} from '../../styles/font';
import {theme, palette} from '../../styles/theme';
import {useKakaoLogin} from '../../data/recoil/kakaoLogin/hooks/useKakaoLogin';
import {View} from 'native-base';
import {useFruitBoxPoint} from '../../data/recoil/fruitBox/hooks/useFruitBoxPoint';
import MyPageService from '../../services/MyPageService';

export default function MypageMainScreen({navigation}) {
  const [userInfo, setUserInfo] = useState({
    userId: 2,
    nickname: ' ',
    email: '',
    profileUrl: null,
    fruitBox: 0,
  });

  const {openModal: openLogoutModal} = useLogoutModal();
  const {openModal: openUnRegisterCheckModal} = useUnRegisterCheckModal();
  const {donatedFruitBoxPoint, getAllDonatedPoint} = useFruitBoxPoint();

  const fetchProfile = () => {
    MyPageService.getProfile()
      .then(res => {
        if (res.status == 200) {
          console.log('success getting profile');
          console.log(res.data);
          setUserInfo(res.data);
          return res.data;
        } else {
          console.log('get profile failed');
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getAllDonatedPoint();
    fetchProfile();
  }, []);

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="마이페이지"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Profile type="view" uri={userInfo.profileUrl} />
        <SizedBox height={40} />
        <UserInfo
          name={userInfo.nickname}
          email={userInfo.email}
          onPress={() =>
            navigation.navigate('ProfileEdit', {userInfo, fetchProfile})
          }
        />
        <View alignItems={'center'} marginY={15}>
          <DonationBox n={donatedFruitBoxPoint} />
        </View>
        <SizedBox height={24} />
        <Menu navigation={navigation} />
        <Right>
          <Pressable onPress={openLogoutModal}>
            <Subhead2 color={theme.colors.main}>로그아웃 </Subhead2>
          </Pressable>
          <Subhead2 color={palette.gray200}> | </Subhead2>
          <Pressable onPress={openUnRegisterCheckModal}>
            <Subhead2 color={palette.gray300}>회원탈퇴 </Subhead2>
          </Pressable>
        </Right>
      </ScreenContainer>
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
