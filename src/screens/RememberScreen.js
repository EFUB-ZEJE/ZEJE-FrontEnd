import React, {useEffect, useState} from 'react';
import {ScreenHeader, FolderList, FolderTitle} from '../components';
import {RememberService} from '../services/RememberService';
export default function RememberScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [folder, setFolder] = useState('');
  const [diaries, setDiaries] = useState([]);

  useEffect(() => {
    RememberService.getDiaries()
      .then(res => {
        setDiaries(res.data);
      })
      .catch(err => {
        console.error('getFruitBoxPoint error', err);
      });
  }, [diaries]);

  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="기록하기" />
      <FolderList
        diaries={diaries}
        navigation={navigation}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <FolderTitle
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setFolder={setFolder}
        folder={folder}
      />
    </>
  );
}
