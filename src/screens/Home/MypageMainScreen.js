import React, {useState} from 'react';
import {ScreenContainer, ScreenHeader} from '../../components';
import {Text, Image} from 'react-native';
import DonationDialogModal from '../../modal/modals/Home/DonationDialogModal';

import Profile from '../../components/home/MyPage/Profile';
import UserInfo from '../../components/home/MyPage/UserInfo';
import DonationBox from '../../components/home/MyPage/DonationBox';
import Menu from '../../components/home/MyPage/Menu';
import SvgIcon from '../../components';
import styled from 'styled-components';
import {SizedBox} from '../../components';
export default function MypageMainScreen({navigation}) {
  const [userInfo, setUserInfo] = useState({
    userId: 2,
    nickname: '이펍',
    email: 'efub@naver.com',
    profileUrl: null,
    fruitBox: 0,
  });

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="마이페이지"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        {/*userInfo.profileUrl ? (
          <Image source={{uri: userInfo.profileUrl}} />
        ) : (
          <SvgIcon name={'GrayCircle'} />
        )*/}
        <Profile type="view" />
        <SizedBox height={40} />
        <UserInfo
          name={userInfo.nickname}
          email={userInfo.email}
          onPress={() => console.log('Adsf')}
        />
        <DonationBox n={userInfo.fruitBox} />
        <SizedBox height={24} />
        <Menu />
      </ScreenContainer>

      <DonationDialogModal />
    </>
  );
}
