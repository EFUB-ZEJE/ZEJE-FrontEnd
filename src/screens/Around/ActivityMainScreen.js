import React, {useState} from 'react';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
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
import font from '../../components/fonts/font';
import {theme} from '../../styles/theme.js';

export default function ActivityMainScreen({navigation}) {
  const [search, setSearch] = useState('');
  const [filterId, setFilterId] = useState(0);
  const [sortId, setSortId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  // 테스트 데이터 - 지금은 안 되는데 백 연결 시 liked 토글 정상 작동 가능
  const [activityData, setActivityData] = useState([
    {
      id: 0,
      title: '추천 액티비티 이름 1',
      address: '추천 액티비티 주소 1',
      liked: true,
      tag: 1,
    },
    {
      id: 1,
      title: '추천 액티비티 이름 2',
      address: '추천 액티비티 주소 2',
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
    let newData = activityData;
    newData[id].liked = !newData[id].liked;
    setActivityData(newData);
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 액티비티"
        canGoBack={true}
        canSearch={true}
        placeholder="액티비티의 이름이나 주소를 검색해보세요"
        handleChange={_handleTextChange}
      />
      <ScreenContainer>
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
          ? activityData.map(d => (
              <ImageCard
                id={d.id}
                title={d.title}
                address={d.address}
                liked={d.liked}
                handleLike={_handleLikeChange}
              />
            ))
          : activityData
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
      </ScreenContainer>
    </>
  );
}

const filters = [
  {id: 0, title: '전체'},
  {id: 1, title: '스포츠'},
  {id: 2, title: '문화예술'},
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
