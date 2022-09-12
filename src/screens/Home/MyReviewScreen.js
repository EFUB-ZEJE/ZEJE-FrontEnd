import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Subhead_long3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import styled from 'styled-components';
import {palette, theme} from '../../styles/theme';
import {SizedBox, SvgIcon} from '../../components';
import MyPageService from '../../services/MyPageService';
import Reviews from '../../components/Around/Reviews';
import {useEffect, useState} from 'react';
export default function MyReviewScreen({navigation}) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    MyPageService.getMyReviews()
      .then(res => {
        if (res.status == 200) {
          console.log(res.data);
          setReviews(res.data);
        } else {
          console.log('fail get my review');
        }
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="나의 후기 관리"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        {reviews.length == 0 ? (
          <Center>
            <SizedBox height={250} />
            <SvgIcon name={'RedOrange'} />
            <SizedBox height={50} />
            <Subhead_long3 color={theme.colors.main}>
              작성된 후기가 없습니다.
            </Subhead_long3>
          </Center>
        ) : (
          <Reviews reviews={reviews} edit />
        )}
      </ScreenContainer>
    </>
  );
}

const Center = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
