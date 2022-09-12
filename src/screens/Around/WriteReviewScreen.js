import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  WriteEditor,
  DateEditor,
  ImageEditor,
  FilterBox,
  FilterList,
  SizedBox,
} from '../../components';

import {Subhead3, Caption} from '../../styles/font';

import {palette} from '../../styles/theme';
import {theme} from '../../styles/theme';
import styled, {css} from 'styled-components';
import ModalButton from '../../components/home/ModalButton';
import {CommonBanner} from '../../components';
import {Alert} from 'react-native';
import {Rating} from 'react-native-ratings';
import {AroundService} from '../../services/AroundService';
export default function WriteReviewScreen({navigation, route}) {
  const {spotId, _fetchReviews} = route.params;
  const [ratingCount, setRatingCount] = useState(3);
  const [content, setContent] = useState('');

  const _onSubmitReview = () => {
    var body = new FormData();
    body.append('spotId', spotId);
    body.append('score', ratingCount);
    body.append('content', content);
    body.append('image', null);

    AroundService.writeReview(body)
      .then(res => {
        console.log(res.status);
        if (res.status == 201) {
          Alert.alert('알림', '후기가 등록완료되었습니다 :)', [
            {
              text: '확인',
              style: 'default',
            },
          ]);
          setContent('');
          _fetchReviews();
        } else {
          Alert.alert(
            '알림',
            '후기가 등록에 실패했습니다 :( 다시 시도해주세요! ',
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
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="후기 작성하기"
        canGoBack={true}
      />

      <ScreenContainer>
        <RatingBox>
          <Rating
            ratingCount={5}
            onFinishRating={score => setRatingCount(score)}
            style={{paddingVertical: 10, margin: 'auto'}}
            imageSize={30}
            startingValue={3}
          />
          <Caption color={palette.gray600}>
            별표를 스와이프하여 평점을 매겨주세요 :)
          </Caption>
        </RatingBox>
        <SizedBox height={16} />
        <Subhead3>후기내용</Subhead3>
        <SizedBox height={8} />
        <BodyInput
          placeholder={'해당 장소의 후기를 남겨주세요 :)'}
          placeholderTextColor={palette.gray350}
          textAlignVertical="top"
          multiline={true}
          value={content}
          onChangeText={text => setContent(text)}
          numberOfLines={9}
          maxLength={300}
        />

        <SizedBox height={16} />
        <ModalButton text={'제출하기'} onPress={_onSubmitReview} />
      </ScreenContainer>
    </>
  );
}

const RatingBox = styled.View`
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.divider};
  padding-bottom: 20px;
`;
const TextInput = css`
  color: ${palette.gray350};
  background-color: ${theme.colors.search};
  border-radius: 10px;
  line-height: 18px;
  // margin-top: 8px;
`;
const BodyInput = styled.TextInput`
  ${TextInput}
  height: 246px;
  // padding: 15px;
`;
