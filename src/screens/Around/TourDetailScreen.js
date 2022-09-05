import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import font from '../../styles/font.js';
import {theme} from '../../styles/theme.js';
import {
  ScreenHeader,
  ScreenContainer,
  SizedBox,
  CommonButton,
} from '../../components';
import {AroundService} from '../../services/AroundService';
export default function TourDetailScreen({route, navigation}) {
  const {spotId} = route.params;
  const [data, setData] = useState('');
  useEffect(() => {
    AroundService.getSpot(spotId)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error('TourList error', err);
      });
  }, [spotId]);
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle={data.name}
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        {data.image ? (
          <ImageContainer source={{uri: data.image}} />
        ) : (
          <ImageContainer
            source={require('../../assets/images/thumbnail.png')}
          />
        )}
        <SizedBox height={16} />
        <font.title.Subhead3>{data.name}</font.title.Subhead3>
        <SizedBox height={4} />
        <font.body.Body1>{data.location}</font.body.Body1>
        <Text>{data.description}</Text>
        <Text>{data.category}</Text>
        <Text>{data.type}</Text>
        <CommonButton
          text="지도에서 위치 확인하기"
          bgColor={theme.main}
          color="#fff"
        />
      </ScreenContainer>
    </>
  );
}

const ImageContainer = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 10px;
`;
