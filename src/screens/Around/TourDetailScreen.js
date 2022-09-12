import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity} from 'react-native';
import font from '../../styles/font.js';
import {theme} from '../../styles/theme.js';
import Reviews from '../../components/Around/Reviews.js';
import {Subhead3} from '../../styles/font.js';
import ModalButton from '../../components/home/ModalButton.js';

import {
  ScreenHeader,
  ScreenContainer,
  SizedBox,
  CommonButton,
  SvgIcon,
} from '../../components';
import {AroundService} from '../../services/AroundService';

export default function TourDetailScreen({route, navigation}) {
  const {spotId} = route.params;
  const [data, setData] = useState('');

  const [reviews, setReviews] = useState([
    {
      reviewId: 1,
      spotId: 1,
      userId: 4,
      content: '안녕',
      score: 5,
      createdDate: '2022-07-14T17:10:57',
      image: null,
    },
    {
      reviewId: 2,
      spotId: 1,
      userId: 4,
      content: 'dsf',
      score: 5,
      createdDate: '2022-07-14T17:11:43',
      image:
        'http://dnyenjxny3wzj.cloudfront.net/review/스크린샷 2022-07-09 오후 2.53.52-20220714171142.png',
    },
    {
      reviewId: 3,
      spotId: 1,
      userId: 4,
      content:
        '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
      score: 2,
      createdDate: '2022-07-14T17:12:22',
      image:
        'http://dnyenjxny3wzj.cloudfront.net/review/제제캐릭터-20220714171221.png',
    },
    {
      reviewId: 4,
      spotId: 1,
      userId: 4,
      content: '안녕',
      score: 3,
      createdDate: '2022-07-14T17:12:57',
      image:
        'http://dnyenjxny3wzj.cloudfront.net/review/제 제 캐릭터-20220714171256.png',
    },
    {
      reviewId: 5,
      spotId: 1,
      userId: 6,
      content: '안녕',
      score: 5,
      createdDate: '2022-07-15T15:40:08',
      image:
        'http://dnyenjxny3wzj.cloudfront.net/review/제 제 캐릭터-20220715154007.png',
    },
  ]);

  useEffect(() => {
    AroundService.getSpot(spotId)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error('TourList error', err);
      });
  }, [spotId]);
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle={data.name}
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        {data.image ? (
          <ImageContainer source={{uri: data.image}} />
        ) : (
          <ImageContainer
            source={require('../../assets/images/thumbnail.png')}
          />
        )}
        <SizedBox height={16} />
        <font.title.Subhead3>{data.name}</font.title.Subhead3>
        <SizedBox height={4} />
        <font.body.Body1>{data.location}</font.body.Body1>

        <SizedBox height={48} />
        <ReviewContainer>
          <Subhead3>후기 </Subhead3>
          <TouchableOpacity onPress={() => navigation.navigate('WriteReview')}>
            <SvgIcon name="Write" />
          </TouchableOpacity>
        </ReviewContainer>
        <Reviews reviews={reviews} />
      </ScreenContainer>
    </>
  );
}

const ReviewContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 4px;
  padding: 4px;
`;
const ImageContainer = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;

const ReviewBox = styled.View``;
