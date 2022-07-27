import React from 'react';
import CommonBanner from '../components/Around/CommonBanner';
import styled from 'styled-components';
import SmallBanner from '../components/Around/SmallBanner';
import PhotoBanner from '../components/Around/PhotoBanner';
import font from '../components/fonts/font';
import {palette, theme} from '../styles/theme';
import Icon from '../assets/images/Icon';

const Container = styled.View`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-start;
`;

const HeadlineContainer = styled.View`
  width: 100%;
  height: 10%;
  align-self: flex-start;
  margin-top: 10px;
  padding: 20px;
`;

const Section = styled.View`
  display: flex;
  width: 100%;
  height: 90%;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-top-width: 1px;
  border-top-color: ${theme.colors.divider};
`;

const BannerWrapper = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

//둘러보기
export default function AroundScreen({navigation}) {
  return (
    <Container>
      <HeadlineContainer>
        <font.title.Headline color={theme.colors.main}>
          둘러보기
        </font.title.Headline>
      </HeadlineContainer>
      <Section>
        <CommonBanner
          text="내 주변의 친환경 스팟 확인하기"
          color={'white'}
          bgColor={theme.colors.main}
        />
        <BannerWrapper>
          <SmallBanner text="전기차 충전소" iconSrc={Icon.BatteryIcon} />
          <SmallBanner text="자전거 도로" iconSrc={Icon.BicycleIcon} />
        </BannerWrapper>
        <PhotoBanner
          text="ZEJE의 추천 여행지"
          onPress={() => navigation.navigate('TourMain')}
        />
        <PhotoBanner
          text="ZEJE의 추천 액티비티"
          onPress={() => navigation.navigate('ActivityMain')}
        />
        <CommonBanner
          text="장소 제보하기"
          color={theme.colors.main}
          bgColor={palette.orange100}
        />
      </Section>
    </Container>
  );
}
