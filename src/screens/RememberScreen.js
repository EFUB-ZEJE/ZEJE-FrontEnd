import React, {useState} from 'react';
import { ScreenHeader, FolderList, FolderTitle} from '../components';

export default function RememberScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [folder, setFolder] = useState('');

  return (
    <>
      <ScreenHeader navigation={navigation} screenTitle="기록하기" />

      {/* <PostBanner
          icon="Plus"
          text="일기장 추가"
          onPress={console.log('open BottomSheet')}
        /> */}
      <FolderList
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
