import {View, Text} from 'react-native';
import React, {useState} from 'react';
import styled from 'styled-components';
import {Subhead2, Caption, Body2} from '../../styles/font';
import {palette} from '../../styles/theme';
import SizedBox from '../common/SizedBox';
import Profile from '../home/MyPage/Profile';
import {Rating} from 'react-native-ratings';

export default function Reviews({reviews}) {
  if (reviews.length == 0) {
    return (
      <View style={{marginLeft: 10}}>
        <Body2 color={palette.gray350}>아직 작성된 후기가 없습니다.</Body2>
      </View>
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

function Review({createdDate, userId, content, image, score}) {
  const _ratingCompleted = e => {
    console.log(e);
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
    </Container>
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
`;

const RatingContainer = styled.View`
  align-self: flex-start;
`;
