import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';
import font from '../../styles/font';
import {ScreenHeader, ScreenContainer, SizedBox} from '../../components';
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
        rightIcon="Modify"
        // handlePress={}
      />
      <ScreenContainer>
        {data.image ? (
          <ImageContainer source={{uri: data.image}} />
        ) : (
          <ImageContainer
            source={require('../../assets/images/thumbnail.png')}
          />
        )}
        <SizedBox height={38} />
        <font.title.Subhead2>날짜</font.title.Subhead2>
        <Text>{data.createdDate}</Text>
        <SizedBox height={20} />

        <font.title.Subhead2>제목</font.title.Subhead2>
        <Text>{data.title}</Text>
        <SizedBox height={20} />

        <font.title.Subhead2>기록하기</font.title.Subhead2>
        <Text>{data.content}</Text>
      </ScreenContainer>
    </>
  );
}

const ImageContainer = styled.Image`
  width: 100%;
`;
