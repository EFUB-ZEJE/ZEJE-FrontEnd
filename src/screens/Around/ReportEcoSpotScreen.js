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
import {AroundService} from '../../services/AroundService';
import {palette} from '../../styles/theme';
import {theme} from '../../styles/theme';
import styled, {css} from 'styled-components';
import ModalButton from '../../components/home/ModalButton';
import {CommonBanner} from '../../components';
import {Alert} from 'react-native';
import {CommonInput} from '../../components';
export default function ReportEcoSpotScreen({navigation}) {
  const [name, setName] = useState(''); // 장소명
  const [description, setDescription] = useState(''); //설명
  const [image, setImage] = useState(null); //이미지
  const [coordinate, setCoordinate] = useState({
    //좌표
    // 제주도 위치
    latitude: 33.38825,
    longitude: 126.4324,
  });
  const [location, setLocation] = useState('');
  const [filterId, setFilterId] = useState(0);

  const _handleFilterChange = id => {
    setFilterId(id);
  };
  const _handleComplete = () => {
    var body = new FormData();

    body.append('name', name);
    body.append('type', filters[filterId].title);

    var photo = null;
    if (image) {
      photo = {name: image.fileName, uri: image.uri, type: image.type};
    }

    body.append('image', photo);
    body.append('description', description);
    body.append('mapX', coordinate.longitude);
    body.append('mapY', coordinate.latitude);
    body.append('location', location);
    console.log(body);

    AroundService.reportSpot(body)
      .then(res => {
        if (res.status == 200) {
          Alert.alert('알림', '제보가 완료되었습니다 :)', [
            {
              text: '확인',
              style: 'default',
            },
          ]);
        } else {
          Alert.alert('알림', '제보에 실패했습니다 :(', [
            {
              text: '확인',
              style: 'default',
            },
          ]);
        }
      })
      .catch(err => console.log(err));
  };

  const filters = [
    {id: 0, title: '관광'},

    {id: 1, title: '식당'},
    {id: 2, title: '카페'},
    {id: 3, title: '쇼핑'},
    {id: 4, title: '기타'},
  ];

  const _reportSpot = () => {
    _handleComplete();
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
          <CommonInput
            placeholder={'장소명을 입력해주세요'}
            value={name}
            handleSubmit={() => console.log('제출')}
            handleChange={name => setName(name)}
          />
        </Col>
        <SizedBox height={12} />
        <Col>
          <Subhead2>위치</Subhead2>
          <SizedBox height={8} />
          <CommonBanner
            text="지도에서 찾기"
            color={palette.gray350}
            bgColor={palette.gray100}
            onPress={() =>
              navigation.navigate('SearchMap', {coordinate, setCoordinate})
            }
            icon="RightArrow"
          />
        </Col>
        <SizedBox height={12} />
        <Col>
          <Subhead2>주소</Subhead2>
          <SizedBox height={8} />
          <CommonInput
            placeholder={'주소를 입력해주세요'}
            value={location}
            handleSubmit={() => console.log('제출')}
            handleChange={location => setLocation(location)}
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
        <ImageEditor setImage={setImage} />

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
            value={description}
            numberOfLines={9}
            onChangeText={desc => setDescription(desc)}
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
