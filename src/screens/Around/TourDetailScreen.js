import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text, TouchableOpacity} from 'react-native';
import font from '../../styles/font.js';
import {palette, theme} from '../../styles/theme.js';
import Reviews from '../../components/Around/Reviews.js';
import {Subhead3, Caption} from '../../styles/font.js';
import ModalButton from '../../components/home/ModalButton.js';
import {Linking} from 'react-native';
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

  const _fetchReviews = () => {
    AroundService.getReviews(spotId).then(res => {
      if (res.status == 200) {
        setReviews(res.data);
      } else {
        console.log('리뷰를 가져오지 못했습니다');
      }
    });
  };

  useEffect(() => {
    //console.log('리뷰가져오기');
    _fetchReviews();
  }, [spotId]);

  const _openLink = () => {
    if (data.link == '') return;

    Linking.openURL(data.link);
  };
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
        <SizedBox height={16} />
        <Caption color={palette.gray400}>{data.description}</Caption>
        <SizedBox height={24} />
        <ModalButton text="더 알아보기" onPress={_openLink} />
        <SizedBox height={24} />
        <ReviewContainer>
          <Subhead3>후기 </Subhead3>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('WriteReview', {
                spotId: data.spotId,
                _fetchReviews: _fetchReviews,
              })
            }>
            <SvgIcon name="Write" />
          </TouchableOpacity>
        </ReviewContainer>

        <Reviews reviews={reviews} _fetchReviews={_fetchReviews} />
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
