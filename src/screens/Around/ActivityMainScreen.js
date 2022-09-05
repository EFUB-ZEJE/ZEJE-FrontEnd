import React, {useState, useEffect} from 'react';
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
import font from '../../styles/font.js';
import {theme} from '../../styles/theme.js';
import {AroundService} from '../../services/AroundService';

export default function ActivityMainScreen({navigation}) {
  const [filterId, setFilterId] = useState(0);
  const [sortId, setSortId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    AroundService.getActivityList()
      .then(res => {
        setActivityData(res.data.slice(0, 30));
      })
      .catch(err => {
        console.error('ActivityList error', err);
      });
  }, []);
  const _handleTextChange = text => {
    if (text.length === 0) {
      AroundService.getActivityList()
        .then(res => {
          setActivityData(res.data.slice(0, 30));
        })
        .catch(err => {
          console.error('ActivityList error', err);
        });
    }
    AroundService.searchActivityList(text)
      .then(res => {
        setActivityData(res.data.slice(0, 30));
      })
      .catch(err => {
        console.error('ActivityList error', err);
      });
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
                id={d.spotId}
                title={d.name}
                address={d.location}
                image={d.image}
                liked={false}
                handleLike={_handleLikeChange}
                navigation={navigation}
              />
            ))
          : activityData
              .filter(f => f.tag === filterId)
              .map(d => (
                <ImageCard
                  id={d.spotId}
                  title={d.name}
                  address={d.location}
                  image={d.image}
                  liked={false}
                  handleLike={_handleLikeChange}
                  navigation={navigation}
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
