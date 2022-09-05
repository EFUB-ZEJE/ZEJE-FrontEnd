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
import {Subhead2, Caption} from '../../styles/font';
import {DiaryService} from '../../services/DiaryService';
import {palette} from '../../styles/theme';
import {theme} from '../../styles/theme';
import styled, {css} from 'styled-components';
import ModalButton from '../../components/home/ModalButton';
import {CommonBanner} from '../../components';
import {Alert} from 'react-native';
export default function ReportEcoSpotScreen({navigation}) {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [filterId, setFilterId] = useState(0);

  const _handleFilterChange = id => {
    setFilterId(id);
  };
  const _handleComplete = () => {};

  const filters = [
    {id: 0, title: '관광'},

    {id: 1, title: '식당'},
    {id: 2, title: '카페'},
    {id: 3, title: '쇼핑'},
    {id: 4, title: '기타'},
  ];

  const _reportSpot = () => {
    Alert.alert('알림', '제보되었습니다', [
      {
        text: '확인',
        style: 'default',
      },
    ]);
  };
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="친환경 스팟 제보하기"
        canGoBack={true}
        handlePress={_handleComplete}
      />

      <ScreenContainer>
        <Col>
          <Subhead2>장소명</Subhead2>
          <SizedBox height={8} />
          <CommonBanner
            text="구글 지도에서 찾기"
            color={palette.gray350}
            bgColor={palette.gray100}
            onPress={() => console.log('카카오지도로 이동')}
            icon="RightArrow"
          />
        </Col>
        <SizedBox height={24} />
        <Col>
          <Subhead2>장소유형</Subhead2>
          <SizedBox height={8} />
          <FilterList>
            {filters.map(f => (
              <FilterBox
                key={f.id}
                id={f.id}
                title={f.title}
                activated={f.id === filterId}
                handlePress={_handleFilterChange}
              />
            ))}
          </FilterList>
        </Col>
        <SizedBox height={24} />
        <ImageEditor />

        <Col>
          <Subhead2 color={theme.colors.black}>장소설명</Subhead2>
          <SizedBox height={8} />

          <BodyInput
            placeholder={
              '해당 장소의 어떤 점이 친환경적인지 설명해주세요. \n 예) 일회용품을 사용하지 않고 포장해줘요'
            }
            placeholderTextColor={palette.gray350}
            textAlignVertical="top"
            multiline={true}
            numberOfLines={9}
            tec
          />
        </Col>
        <SizedBox height={24} />
        <Caption color={palette.gray300}>
          입력하신 정보는 검토후 친환경 스팟 장소 정보로 등록됩니다. {'\n'}사진
          첨부시 개인정보가 노출되지 않도록 유의하세요.
        </Caption>
        <SizedBox height={24} />
        <ModalButton text="제보하기" onPress={_reportSpot} />
      </ScreenContainer>
    </>
  );
}
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

const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
