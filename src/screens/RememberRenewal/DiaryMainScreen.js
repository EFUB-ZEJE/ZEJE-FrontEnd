import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useIsFocused} from '@react-navigation/native';
import {
  ScreenHeader,
  CommonButton,
  RememberCard,
  SizedBox,
} from '../../components';
import {palette} from '../../styles/theme.js';
import {RememberService} from '../../services/RememberService';

export default function DiaryMainScreen({route, navigation}) {
  const isFocused = useIsFocused();
  const {diaryId, diaryName} = route.params;
  const [memories, setMemories] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const _handleDeleteMemoryButton = id => {
    setModalVisible(true);
  };
  useEffect(() => {
    RememberService.getMemories(diaryId)
      .then(res => {
        setMemories(res.data);
      })
      .catch(err => {
        console.error('getMemories error', err);
      });
  }, [diaryId, isFocused]);
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle={diaryName}
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <CommonButton
          text="일기 추가"
          bgColor={palette.gray150}
          color={palette.gray400}
          onPress={() => navigation.navigate('AddMemory', {diaryId: diaryId})}
        />
        <SizedBox height={16} />
        {memories.map(m => (
          <RememberCard
            diaryId={diaryId}
            memoryId={m.memoryId}
            title={m.title}
            address={m.createdDate}
            navigation={navigation}
            handleDelete={_handleDeleteMemoryButton}
          />
        ))}
      </ScreenContainer>
    </>
  );
}

const ScreenContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
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
