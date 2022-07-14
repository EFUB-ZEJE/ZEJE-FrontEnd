import {View, Text} from 'react-native';
import React from 'react';
import CommonBanner from '../components/common/CommonBanner';
import styled from 'styled-components';
import SmallBanner from '../components/common/SmallBanner';
import PhotoBanner from '../components/common/PhotoBanner';

const Container = styled.View`
  display: flex;
  padding: 20px;
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

const H1 = styled.Text`
  color: black;
  font-size: 24px;
  font-weight: 700;
  align-self: flex-start;
`;

const BannerWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  justify-content: space-between;
`;
//둘러보기
export default function AroundScreen() {
  return (
    <Container>
      <H1>둘러보기</H1>
      <CommonBanner text="오늘의 친환경 스팟 확인하기" />
      <BannerWrapper>
        <SmallBanner text="전기차 충전소" />
        <SmallBanner text="자전거 여행" />
      </BannerWrapper>
      <PhotoBanner text="ZEJE의 추천 여행지" />
      <PhotoBanner text="ZEJE의 추천 액티비티" />
    </Container>
  );
}
