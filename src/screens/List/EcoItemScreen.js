import {View, Text} from 'react-native';
import React from 'react';
import {ScreenHeader, ScreenContainer} from '../../components';
import List from '../../components/List/List';
import {saveData, getData} from '../../services/LocalStorage';
export default function EcoItemScreen({navigation}) {
  const ecoItems = [
    '텀블러',
    '다회용기',
    '대나무 칫솔',
    '고체 치약',
    '수저 세트',
    '장바구니',
    '손수건',
    '샴푸바,린스바,세안비누',
  ];

  const _addItem = async text => {
    const loadedData = await getData('tasks'); // 데이터 가져오기

    //var size = Object.keys(loadedData).length;

    console.log(loadedData);
    //저장된 data가 없을때 예외처리
    const ID = Date.now().toString();
    const newTaskObject = {
      [ID]: {id: ID, text: text, completed: false},
    };

    storeData({...loadedData, ...newTaskObject}); //데이터 저장
  };

  const storeData = async tasks => {
    await saveData('tasks', JSON.stringify(tasks));
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="제로웨이스트 짐싸기 아이템"
        canGoBack={true}
      />
      <ScreenContainer>
        {ecoItems.map(item => (
          <List key={item} text={item} mode={'add'} _addItem={_addItem} />
        ))}
      </ScreenContainer>
    </>
  );
}
