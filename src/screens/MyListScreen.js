import React, {useState} from 'react';
import {Text} from 'react-native';
import {ScreenContainer, ScreenHeader} from '../components';
import CommonBanner from '../components/common/CommonBanner';
import SmallBanner from '../components/Around/SmallBanner';
import {theme, palette} from '../styles/theme';
import CheckList from '../components/List/CheckList';
import WishList from '../components/List/WishList';
import styled from 'styled-components';
import {SizedBox} from '../components';
import font from '../styles/font';
import useTab from '../components/List/useTab';

const content = [<CheckList />, <WishList />];

export default function MyListScreen({navigation}) {
  const {currentIdx, currentItem, changeItem} = useTab(0, content);

  console.log(currentItem);
  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="리스트" />
      <ScreenContainer>
        <CommonBanner
          text="추천 제로웨이스트 짐싸기 아이템"
          color={theme.colors.main}
          bgColor={'white'}
          onPress={() => console.log('추천아이템')}
          border={true}
          borderColor={theme.colors.main}
        />
        <SizedBox height={16} />
        <BannerWrapper>
          <SmallBanner
            text="체크 리스트"
            icon={'Check'}
            onPress={() => changeItem(0)}
            color={currentIdx == 0 ? 'white' : theme.colors.main}
            bgColor={currentIdx == 0 ? theme.colors.main : palette.orange100}
          />
          <SmallBanner
            text="위시 리스트"
            icon={'Heart'}
            onPress={() => changeItem(1)}
            color={currentIdx == 1 ? 'white' : theme.colors.main}
            bgColor={currentIdx == 1 ? theme.colors.main : palette.orange100}
          />
        </BannerWrapper>
        <SizedBox height={8} />
        <TextContainer>
          <font.body.Caption color={theme.colors.main}>편집</font.body.Caption>
        </TextContainer>
        {currentItem}
      </ScreenContainer>
    </>
  );
}

const TextContainer = styled.View`
  display: flex;
  align-items: flex-end;
`;
const BannerWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
