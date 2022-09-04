import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import {ScreenHeader, ScreenContainer} from '../../components';
import {RememberService} from '../../services/RememberService';
export default function MemoryMainScreen({route, navigation}) {
  const {diaryId, memoryId} = route.params;
  const [data, setData] = useState('');
  useEffect(() => {
    RememberService.getMemory(diaryId, memoryId)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.error('getMemory error', err);
      });
  }, [diaryId, memoryId]);
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="내 일기"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Text>{data.title}</Text>
        <Text>{data.content}</Text>
        <Text>{data.createdDate}</Text>
      </ScreenContainer>
    </>
  );
}
