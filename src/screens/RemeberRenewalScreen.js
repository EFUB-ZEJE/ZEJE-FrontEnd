import React, {useState, useEffect} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {
  ScreenContainer,
  ScreenHeader,
  AddDiaryCard,
  CommonInput,
  DiaryCardList,
  SortButton,
  ImageCard,
  BottomSheet,
  SizedBox,
  SvgIcon,
  RadioButton,
} from '../components';
import font from '../styles/font.js';
import {theme} from '../styles/theme.js';
import {RememberService} from '../services/RememberService';

export default function RememberRenewalScreen({navigation}) {
  const [diaries, setDiaries] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newDiary, setNewDiary] = useState('');

  useEffect(() => {
    RememberService.getDiaries()
      .then(res => {
        setDiaries(res.data);
        console.log('*');
      })
      .catch(err => {
        console.error('Diaries error', err);
      });
  }, []);

  const _handleTextChange = text => {
    setNewDiary(text);
    console.log(text);
  };
  const _handleSubmitEditing = () => {
    RememberService.addDiary(newDiary)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error('add Diary error', err);
      });
    setModalVisible(false);
  };
  const _handlePressAddDiaryButton = () => {
    setModalVisible(true);
  };
  const _handlePressDiaryButton = (id, name) => {
    navigation.navigate('DiaryMain', {diaryId: id, diaryName: name});
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="기록하기"
        canGoBack={false}
        canSearch={false}
      />
      <ScreenContainer>
        <AddDiaryCard handlePress={_handlePressAddDiaryButton} />
        <DiaryCardList
          diaries={diaries}
          handlePress={_handlePressDiaryButton}
        />
      </ScreenContainer>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <BottomDrawerTitle>
          <font.title.Subhead3 color={theme.colors.main}>
            일기장 추가
          </font.title.Subhead3>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <SvgIcon name="Close" />
          </TouchableOpacity>
        </BottomDrawerTitle>
        <CommonInput
          placeholder="일기장 이름"
          handleChange={_handleTextChange}
          handleSubmit={_handleSubmitEditing}
        />
      </BottomSheet>
    </>
  );
}

const BottomDrawerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
`;
