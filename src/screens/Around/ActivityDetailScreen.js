import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {ScreenHeader, ScreenContainer} from '../../components';
import {AroundService} from '../../services/AroundService';
export default function ActivityDetailScreen({route, navigation}) {
  const {spotId} = route.params;
  const [data, setData] = useState('');
  useEffect(() => {
    AroundService.getSpot(spotId)
      .then(res => {
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
        <Text>{data.category}</Text>
        <Text>{data.description}</Text>
        <Text>{data.location}</Text>
        <Text>{data.name}</Text>
        <Text>{data.type}</Text>
      </ScreenContainer>
    </>
  );
}
