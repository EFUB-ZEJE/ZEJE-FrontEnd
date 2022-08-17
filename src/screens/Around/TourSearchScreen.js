import React, {useRef, useEffect, useState} from 'react';
import styled from 'styled-components';
import {TouchableOpacity, View, Keyboard} from 'react-native';
import {
  ScreenContainer,
  ScreenHeader,
  FilterBox,
  FilterList,
  SortButton,
  ImageCard,
  BottomSheet,
  SizedBox,
  SvgIcon,
  RadioButton,
} from '../../components';
import font from '../../styles/font.js';
import {theme, palette} from '../../styles/theme.js';

export default function TourSearchScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [recent, setRecent] = useState(['최근 검색어 1', '최근 검색어 2']);
  const [filterId, setFilterId] = useState(0);
  const [sortId, setSortId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [focus, setFocus] = useState(true);

  const refSearchBar = useRef(null);

  useEffect(() => {
    refSearchBar.current.focus();
  }, []);

  // 테스트 데이터 - 지금은 안 되는데 백 연결 시 liked 토글 정상 작동 가능
  const [tourData, setTourData] = useState([
    {
      id: 0,
      title: '추천 여행지 이름 1',
      address: '추천 여행지 주소 1',
      liked: true,
      tag: 1,
    },
    {
      id: 1,
      title: '추천 여행지 이름 2',
      address: '추천 여행지 주소 2',
      liked: false,
      tag: 2,
    },
  ]);
  const _handleTextChange = text => {
    setSearch(text);
  };
  const _handleFilterChange = id => {
    setFilterId(id);
  };
  const _handlePressSortButton = () => {
    setModalVisible(true);
  };
  const _handleSortChange = id => {
    setSortId(id);
    setModalVisible(false);
  };
  const _handleLikeChange = id => {
    let newData = tourData;
    newData[id].liked = !newData[id].liked;
    setTourData(newData);
  };
  const _handleFocus = () => {
    setFocus(true);
  };
  const _handleSubmit = () => {
    setFocus(false);
    Keyboard.dismiss();
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 여행지"
        canGoBack={true}
        canSearch={true}
        placeholder="여행지의 이름이나 주소를 검색해보세요"
        handleChange={_handleTextChange}
        refSearchBar={refSearchBar}
        onFocus={_handleFocus}
        onSubmitEditing={_handleSubmit}
      />
      <ScreenContainer>
        {focus ? (
          // 최근 검색 리스트
          <SearchList>
            {recent.length === 0 ? (
              <SearchListTitle>
                <View />
                <font.body.Caption color={theme.colors.main}>
                  최근 검색어 내역이 없습니다.
                </font.body.Caption>
                <View />
              </SearchListTitle>
            ) : (
              <>
                <SearchListTitle>
                  <font.body.Caption color={theme.colors.main}>
                    최근 검색어
                  </font.body.Caption>
                  <font.body.Caption color={theme.colors.main}>
                    전체 삭제
                  </font.body.Caption>
                </SearchListTitle>
                {recent.map(r => (
                  <SearchListBody>
                    <font.body.Body1>{r}</font.body.Body1>
                    <SvgIcon name="CloseDefault" />
                  </SearchListBody>
                ))}
              </>
            )}
          </SearchList>
        ) : (
          // 검색 결과
          <>
            <FilterList>
              {filters.map(f => (
                <FilterBox
                  id={f.id}
                  title={f.title}
                  activated={f.id === filterId}
                  handlePress={_handleFilterChange}
                />
              ))}
            </FilterList>
            <BottomSheet
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}>
              <BottomDrawerTitle>
                <font.title.Subhead3 color={theme.colors.main}>
                  정렬
                </font.title.Subhead3>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <SvgIcon name="Close" />
                </TouchableOpacity>
              </BottomDrawerTitle>
              {sorts.map(s => (
                <>
                  {s.id !== 0 ? <SizedBox height={4} /> : <></>}
                  <RadioButton
                    id={s.id}
                    label={s.title}
                    activated={sortId === s.id}
                    handlePress={_handleSortChange}
                  />
                </>
              ))}
            </BottomSheet>
            <SortButton
              sortBy={sorts[sortId].title}
              handlePress={_handlePressSortButton}
            />
            {filterId === 0
              ? tourData.map(d => (
                  <ImageCard
                    id={d.id}
                    title={d.title}
                    address={d.address}
                    liked={d.liked}
                    handleLike={_handleLikeChange}
                  />
                ))
              : tourData
                  .filter(f => f.tag === filterId)
                  .map(d => (
                    <ImageCard
                      id={d.id}
                      title={d.title}
                      address={d.address}
                      liked={d.liked}
                      handleLike={_handleLikeChange}
                    />
                  ))}
          </>
        )}
      </ScreenContainer>
    </>
  );
}

const filters = [
  {id: 0, title: '전체'},
  {id: 1, title: '스팟'},
  {id: 2, title: '관광'},
  {id: 3, title: '식당'},
  {id: 4, title: '카페'},
  {id: 5, title: '쇼핑'},
];

const sorts = [
  {id: 0, title: '최신순'},
  {id: 1, title: '인기순'},
  {id: 2, title: '거리순'},
];

const BottomDrawerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const SearchList = styled.View`
  height: 100%;
  flex-direction: column;
`;

const SearchListTitle = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const SearchListBody = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom-width: 1px;
  border-color: ${palette.gray150};
`;
