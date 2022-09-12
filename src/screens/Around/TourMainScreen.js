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
import ListService from '../../services/ListService';
import Spinner from 'react-native-loading-spinner-overlay/lib';
export default function TourMainScreen({navigation}) {
  const [filterId, setFilterId] = useState(0);
  const [sortId, setSortId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tourData, setTourData] = useState([]);
  useEffect(() => {
    AroundService.getTourList()
      .then(res => {
        setTourData(res.data.slice(0, 100));
        setIsLoading(false);
      })
      .catch(err => {
        console.error('TourList error', err);
      });
  }, []);

  const _handleTextChange = text => {
    if (text.length === 0) {
      AroundService.getTourList()
        .then(res => {
          setTourData(res.data.slice(0, 30));
        })
        .catch(err => {
          console.error('TourList error', err);
        });
    }
    AroundService.searchTourList(text)
      .then(res => {
        setTourData(res.data.slice(0, 30));
      })
      .catch(err => {
        console.error('TourList error', err);
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
  const _handleLikeChange = spotId => {
    let newData = tourData;

    if (newData[spotId].liked == undefined || newData[spotId].liked == false) {
      //좋아요 안된 상태면 좋아요 추가
      ListService.addWishList(spotId)
        .then(res => {
          if (res.status == 200) {
            console.log('위시리스트 추가 성공');
          } else {
            console.log('위시리스트 추가 실패');
          }
        })
        .catch(err => console.log(err));
    } else {
      //좋아요 된 상태면 좋아요 취소
      ListService.deleteWishList(spotId)
        .then(res => {
          if (res.status == 200) {
            console.log('위시리스트 삭제 성공');
          } else {
            console.log('위시리스트 삭제 실패');
          }
        })
        .catch(err => console.log(err));
    }

    if (newData[spotId].liked == true || newData[spotId].liked == false) {
      newData[spotId].liked = !newData[spotId].liked;
    } else {
      newData[spotId].liked = true;
    }
    setTourData(newData);
  };

  return (
    <>
      <Spinner
        cancelable={true}
        color={theme.colors.main}
        visible={isLoading}
        textContent="Loading..."
      />
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 여행지"
        canGoBack={true}
        canSearch={true}
        placeholder="여행지의 이름이나 주소를 검색해보세요"
        handleChange={_handleTextChange}
      />
      <ScreenContainer>
        <BottomSheet
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          focus>
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
                key={s.id}
                label={s.title}
                activated={sortId === s.id}
                handlePress={_handleSortChange}
              />
            </>
          ))}
        </BottomSheet>

        {filterId === 0
          ? tourData.map(d => (
              <ImageCard
                key={d.spotId}
                id={d.spotId}
                title={d.name}
                image={d.image}
                address={d.location}
                liked={d.liked ? d.liked : false}
                handleLike={() => _handleLikeChange(d.spotId)}
                navigation={navigation}
                type="tour"
              />
            ))
          : tourData
              .filter(f => f.type === filters[filterId].title)
              .map(d => (
                <ImageCard
                  key={d.spotId}
                  id={d.spotId}
                  title={d.name}
                  image={d.image}
                  address={d.location}
                  liked={d.liked ? d.liked : false}
                  handleLike={_handleLikeChange}
                  navigation={navigation}
                  type="tour"
                />
              ))}
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
