import React, {useState} from 'react';
import {ScreenHeader, SizedBox, SortButton} from '../../components';
import {Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';
import BottomSheet from '../../components/common/BottomSheet';
import font from '../../styles/font';
import {palette, theme} from '../../styles/theme';
import SvgIcon from '../../components/common/SvgIcon';
import Spot from '../../components/Around/Spot';

export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');
  const [modalVisible, setModalVisible] = useState(true);
  const numOfNearSpots = 0; // 현재 위치와 가까운 스팟 목록
  const [sproutPlaces, setSproutPlace] = useState([
    {
      spotId: 87,
      contentId: 129145,
      category: '여행',
      type: '자연',
      name: '마라도 등대',
      location: '제주특별자치도 서귀포시 대정읍 마라로 161',
      description: null,
      link: null,
    },
    {
      spotId: 88,
      contentId: 126450,
      category: '여행',
      type: '자연',
      name: '마라도(마라해양도립공원)',
      location: '제주특별자치도 서귀포시 대정읍 마라로101번길 46',
      description: null,
      link: null,
    },
    {
      spotId: 89,
      contentId: 126452,
      category: '여행',
      type: '자연',
      name: '만장굴 (제주도 국가지질공원)',
      location: '제주특별자치도 제주시 구좌읍 만장굴길 182',
      description: null,
      link: null,
    },
    {
      spotId: 90,
      contentId: 1926601,
      category: '여행',
      type: '자연',
      name: '모구리오름',
      location: '제주특별자치도 서귀포시 성산읍 서성일로',
      description: null,
      link: null,
    },
    {
      spotId: 91,
      contentId: 1928045,
      category: '여행',
      type: '자연',
      name: '모지오름',
      location: '제주특별자치도 서귀포시 표선면 번영로',
      description: null,
      link: null,
    },
    {
      spotId: 92,
      contentId: 126467,
      category: '여행',
      type: '자연',
      name: '무수천',
      location: '제주특별자치도 제주시 애월읍 무수천길',
      description: null,
      link: null,
    },
    {
      spotId: 93,
      contentId: 2740130,
      category: '여행',
      type: '자연',
      name: '문도지오름',
      location: '제주특별자치도 제주시 한림읍 금악리 3444',
      description: null,
      link: null,
    },
    {
      spotId: 94,
      contentId: 127048,
      category: '여행',
      type: '자연',
      name: '문섬/섶섬/범섬/새섬',
      location: '제주특별자치도 서귀포시 막숙포로',
      description: null,
      link: null,
    },
    {
      spotId: 95,
      contentId: 2433925,
      category: '여행',
      type: '자연',
      name: '물영아리오름',
      location: '제주특별자치도 서귀포시 남원읍 태수로 552',
      description: null,
      link: null,
    },
  ]);

  const _fetchSproutPlaces = () => {
    // GET /spots/flowers 요청
    // SproutPlace 갱신
  };

  const _handlePressSortButton = () => {
    if (sortType === '내 위치 중심') {
      setSortType('지도 중심');
    } else {
      setSortType('내 위치 중심');
    }
  };
  const _handlePressViewTypeButton = () => {
    if (viewType === 'List') {
      setViewType('Map');
    } else {
      setViewType('List');
    }
  };

  // 전체 모달 종류
  const modalContents = {
    getPossibleFlowers: (
      <ModalContainer height="78px">
        <font.title.Subhead3 color={theme.colors.main}>
          오늘 10 개의 꽃을 받을 수 있어요!
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          친환경 스팟을 선택해주세요
        </font.body.Body1>
      </ModalContainer>
    ),

    getAllFlowers: (
      <ModalContainer height="196px">
        <SvgIcon name="NotFound" size={'130px'} />
        <SizedBox height={16} />
        <font.title.Subhead3 color={theme.colors.main}>
          10개의 꽃을 모두 받았어요!
        </font.title.Subhead3>
      </ModalContainer>
    ),

    notFound: (
      <ModalContainer height="228px">
        <SvgIcon name="NotFound" size={'130px'} />
        <font.title.Subhead3 color={theme.colors.main}>
          주위에 친환경 스팟이 없어요.
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          다른 위치로 이동해보세요.
        </font.body.Body1>
      </ModalContainer>
    ),
  };

  const modalChildren = modalContents.notFound;

  if (
    viewType === 'List' &&
    sortType === '내 위치 중심' &&
    numOfNearSpots === 0
  ) {
    return (
      <ScreenContainer2>
        <SvgIcon name="RedOrange" size="120px" />
        <font.title.Subhead_long3 color={theme.colors.main}>
          주변에 친환경 스팟이 없어요!
        </font.title.Subhead_long3>
      </ScreenContainer2>
    );
  }

  return (
    <>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        {modalChildren}
      </BottomSheet>
      {/**모달창 하나로 children 만 바꿔쓰기 */}
      <ScreenHeader
        navigation={navigation}
        screenTitle="내 주변의 친환경 스팟"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />

      {viewType === 'Map' ? (
        <Map />
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          {sortType === '내 위치 중심'
            ? sproutPlaces.map(
                (
                  place, // 내위치 중심 -> 나중에 수정 필요
                ) => (
                  <Spot
                    name={place.name}
                    desc={place.description}
                    location={place.location}
                  />
                ),
              )
            : sproutPlaces.map(
                (
                  place, // 지도 중심
                ) => (
                  <Spot
                    name={place.name}
                    desc={place.description}
                    location={place.location}
                  />
                ),
              )}
        </ScreenContainer>
      )}
    </>
  );
}

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;

const ScreenContainer = styled.ScrollView`
  background-color: white;
  padding: 16px 20px;
  padding-top: 0px;
  height: 100%;
`;

const ScreenContainer2 = styled.View`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;
