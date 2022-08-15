import React, {useEffect, useState} from 'react';
import {ScreenHeader, SortButton} from '../../components';
import EVService from '../../services/EVService';
import EVstationMap from './EVstationMap';
import {FoundEVstationModalState} from '../../modal/recoil/modalStates';
import {useRecoilState} from 'recoil';
import FoundEVstationModal from '../../modal/modals/Around/FoundEVstationModal';
import SpotList from '../../components/Around/SpotList';
import styled from 'styled-components';

export default function BatteryMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('Map');
  const [EVstations, setEVstations] = useState([
    {
      name: '산굼부리',
      spotId: 'ME000446',
      location: '제주특별자치도 제주시 조천읍 비자림로 768',
      latitude: 33.43494,
      longitude: 126.689497,
    },
    {
      name: '노형동주민센터',
      spotId: 'ME000457',
      location: '제주특별자치도 제주시 노형9길 9-4, ',
      latitude: 33.483044,
      longitude: 126.47712,
    },
    {
      name: '돌문화공원',
      spotId: 'ME000461',
      location: '제주특별자치도 제주시 조천읍 남조로 2023',
      latitude: 33.445733,
      longitude: 126.663812,
    },
    {
      name: '제주국제컨벤션센터',
      spotId: 'JD160053',

      location: '제주특별자치도 서귀포시 중문관광로 224',

      latitude: 33.38162957,
      longitude: 126.43548295,
    },
    {
      name: '정원파인즈 16차',
      spotId: 'JE010073',

      location: '제주특별자치도 제주시 아라이동 1366',

      latitude: 33.39162957,
      longitude: 126.44948295,
    },
    {
      name: '제주국제컨벤션센터',
      spotId: 'JE01456',

      location: '제주특별자치도 서귀포시 중문관광로 224',

      latitude: 33.37162957,
      longitude: 126.43548295,
    },
  ]);
  const [foundEVstationModalVisible, setFoundEVstationModalVisible] =
    useRecoilState(FoundEVstationModalState);

  console.log(useRecoilState(FoundEVstationModalState));
  useEffect(() => {
    /*
    EVService.getEVstation()
      .then(res => {
        console.log(res);
        if (res.status == 200) {
          setEVstations(() => {
            const deconstructedData = res.data.map(
              ({statNm, statId, addr, lat, lng}) => {
                return {
                  name: statNm,
                  spotId: statId,
                  location: addr,
                  latitude: parseFloat(lat),
                  longitude: parseFloat(lng),
                };
              },
            );
            return deconstructedData;
          });
        }
      })
      .catch(err => console.log(err));
      */

    setFoundEVstationModalVisible(true);
  }, []);

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

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="전기차 충전소"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />

      {viewType === 'Map' ? (
        <>
          <EVstationMap places={EVstations} />
          <FoundEVstationModal />
        </>
      ) : (
        <ScreenContainer>
          <SortButton sortBy={sortType} handlePress={_handlePressSortButton} />

          <SpotList places={EVstations} type={sortType} />
        </ScreenContainer>
      )}
    </>
  );
}
const ScreenContainer = styled.ScrollView`
  background-color: white;
  padding: 16px 20px;
  padding-top: 0px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
