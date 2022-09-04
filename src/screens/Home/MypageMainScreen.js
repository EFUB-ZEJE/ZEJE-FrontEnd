import React, {useState, useEffect} from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {TouchableOpacity} from 'react-native';
import DonationDialogModal from '../../modal/modals/Home/DonationDialogModal';
import Profile from '../../components/home/MyPage/Profile';
import UserInfo from '../../components/home/MyPage/UserInfo';
import DonationBox from '../../components/home/MyPage/DonationBox';
import Menu from '../../components/home/MyPage/Menu';
import styled from 'styled-components';
import {SizedBox} from '../../components';
import LogoutModal from '../../modal/modals/Home/LogoutModal';
import {useLogoutModalState} from '../../modal/recoil/useModals';
import {Subhead2} from '../../styles/font';
import {theme, palette} from '../../styles/theme';
import MyPageService from '../../services/MyPageService';
import {View} from 'native-base';

export default function MypageMainScreen({navigation}) {
  const [userInfo, setUserInfo] = useState({
    userId: 2,
    nickname: ' ',
    email: '',
    profileUrl: null,
    fruitBox: 0,
  });
  const [donations, setDonations] = useState(0);

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
    fetchProfile();
  }, []);

  useEffect(() => {
    MyPageService.getDonations()
      .then(res => {
        if (res.status == 200) {
          setDonations(res.data.fruitTotal);

          console.log('success getDonations');
        } else {
          console.log('기부한 귤수를 가져오지 못했습니다.');
        }
      })
      .catch(err => console.log(err));
  }, []);
  const {openModal} = useLogoutModalState();

  const _unregister = () => {
    //회원탈퇴 요청
  };

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
        <View alignItems={'center'}>
          <DonationBox n={donations} />
        </View>
        <SizedBox height={24} />
        <Menu navigation={navigation} />
        <Right>
          <TouchableOpacity onPress={openModal}>
            <Subhead2 color={theme.colors.main}>로그아웃 </Subhead2>
          </TouchableOpacity>
          <Subhead2 color={palette.gray200}> | </Subhead2>
          <TouchableOpacity onPress={_unregister}>
            <Subhead2 color={palette.gray300}>회원탈퇴 </Subhead2>
          </TouchableOpacity>
        </Right>
      </ScreenContainer>
      <LogoutModal navigation={navigation} />
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
