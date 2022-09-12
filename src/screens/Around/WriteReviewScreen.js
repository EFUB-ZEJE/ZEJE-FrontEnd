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

export default function WriteReviewScreen({navigation}) {
  const [ratingCount, setRatingCount] = useState(0);
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
          numberOfLines={9}
          maxLength={300}
        />
        <SizedBox height={16} />
        <ModalButton text={'제출하기'} onPress={() => console.log('제출')} />
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
  line-height: 10px;
  // margin-top: 8px;
`;
const BodyInput = styled.TextInput`
  ${TextInput}
  height: 246px;
  // padding: 15px;
`;
