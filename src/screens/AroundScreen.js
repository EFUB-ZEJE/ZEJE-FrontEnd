import React from 'react';
import styled from 'styled-components';
import SmallBanner from '../components/Around/SmallBanner';
import PhotoBanner from '../components/Around/PhotoBanner';
import {palette, theme} from '../styles/theme';
import {
  ScreenContainer,
  ScreenHeader,
  SizedBox,
  CommonBanner,
} from '../components';

export default function AroundScreen({navigation}) {
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="둘러보기" />
      <ScreenContainer>
        <CommonBanner
          text="내 주변의 친환경 스팟 확인하기"
          color="white"
          bgColor={theme.colors.main}
          navigation={navigation}
          path="SpotMain"
        />
        <SizedBox height={16} />
        <BannerWrapper>
          <SmallBanner
            icon="Battery"
            text="전기차 충전소"
            navigation={navigation}
            path="BatteryMain"
          />
          <SizedBox width={16} />
          <SmallBanner
            icon="Bike"
            text="자전거 도로"
            navigation={navigation}
            path="BikeMain"
          />
        </BannerWrapper>
        <SizedBox height={24} />
        <PhotoBanner
          text="ZEJE의 추천 여행지"
          navigation={navigation}
          path="TourMain"
        />
        <SizedBox height={16} />
        <PhotoBanner
          text="ZEJE의 추천 액티비티"
          navigation={navigation}
          path="ActivityMain"
        />
        <CommonBanner
          text="장소 제보하기"
          color={theme.colors.main}
          bgColor={palette.orange100}
          navigation={navigation}
          path="ShareInfoMain"
        />
      </ScreenContainer>
    </>
  );
}

const BannerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
