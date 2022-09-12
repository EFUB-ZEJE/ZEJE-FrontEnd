import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Subhead2, Caption, Body2} from '../../styles/font';
import {palette} from '../../styles/theme';
import SizedBox from '../common/SizedBox';
import Profile from '../home/MyPage/Profile';
import {Rating} from 'react-native-ratings';
import SvgIcon from '../common/SvgIcon';
import {AroundService} from '../../services/AroundService';
import {Alert} from 'react-native';
import {kakaoLoginState} from '../../data/recoil/kakaoLogin/states/kakaoLoginState';
import {useRecoilState} from 'recoil';
export default function Reviews({reviews, edit, _fetchReviews}) {
  const [userInfo, setUserInfo] = useRecoilState(kakaoLoginState);

  if (reviews.length == 0) {
    return (
      <View style={{marginLeft: 10}}>
        <Body2 color={palette.gray350}>아직 작성된 후기가 없습니다.</Body2>
      </View>
    );
  }
  function Review({createdDate, userId, content, image, score, reviewId}) {
    const _ratingCompleted = e => {
      console.log(e);
    };
    const _deleteReview = reviewId => {
      AroundService.deleteReview(reviewId)
        .then(res => {
          if (res.status == 200) {
            Alert.alert('알림', '리뷰가 정상적으로 삭제되었습니다 :)', [
              {
                text: '확인',
                style: 'default',
              },
            ]);
            _fetchReviews();
          } else {
            Alert.alert(
              '알림',
              '리뷰가 삭제되지 않았습니다. 다시시도해주세요 :)',
              [
                {
                  text: '확인',
                  style: 'default',
                },
              ],
            );
          }
        })
        .catch(err => console.log(err));
    };
    return (
      <Container>
        <Profile uri={null} type="view" size="xs" />
        <SizedBox width={8} />
        <SubContainer>
          <RatingContainer>
            <Rating
              ratingCount={5}
              readonly
              onFinishRating={_ratingCompleted}
              style={{paddingVertical: 10, margin: 'auto'}}
              imageSize={15}
              startingValue={score}
              isDisabled={true}
              ratingColor={'#FFB700'}
            />
          </RatingContainer>

          <Row>
            <Subhead2>익명{userId} </Subhead2>

            <Caption color={palette.gray250}> | {createdDate}</Caption>
          </Row>
          <SizedBox height={4} />
          <Caption color={palette.gray400}>{content}</Caption>
        </SubContainer>
        {edit && (
          <TouchableOpacity onPress={() => _deleteReview(reviewId)}>
            <SvgIcon name="Trash" />
          </TouchableOpacity>
        )}
      </Container>
    );
  }
  return (
    <>
      {reviews.map(review => {
        //yyyy.mm.dd 로 변환
        const deconstructed_date = review.createdDate
          .slice(0, 10)
          .replace('-', '.')
          .replace('-', '.');

        return (
          <Review
            key={review.reviewId}
            reviewId={review.reviewId}
            userId={review.userId}
            createdDate={deconstructed_date}
            content={review.content}
            image={review.image}
            score={review.score}
          />
        );
      })}
    </>
  );
}

const Row = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;

  border-bottom-width: 0.5px;
  border-bottom-color: ${palette.gray250};
  margin: 4px;
  padding: 4px;
  padding-bottom: 24px;
  align-items: baseline;
`;
const SubContainer = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
`;

const RatingContainer = styled.View`
  align-self: flex-start;
`;
