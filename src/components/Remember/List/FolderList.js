import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import FolderCard from '../FolderCard';
import PostBanner from '../PostBanner';
import DeleteDiaryFolderModal from '../../../modal/modals/Remember/DeleteDairyFolderModal';
import {useDeleteDiaryFolderModal} from '../../../modal/recoil/useModals';

export default function FolderList({
  navigation,
  modalVisible,
  setModalVisible,
  diaries,
}) {
  const {isModalOpen, openModal, closeModal} = useDeleteDiaryFolderModal();
  const handlePostBanner = () => {
    console.log(modalVisible);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Container
        data={diaries}
        numColumns={2}
        keyExractor={(item, index) => index.toString()}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        ListHeaderComponent={() => {
          return (
            <PostBanner
              icon="Plus"
              text="일기장 추가"
              onPress={handlePostBanner}
            />
          );
        }}
        renderItem={({item}) => (
          <>
            <FolderCard
              id={item.diaryId}
              title={item.name}
              navigation={navigation}
              path="DairyDetail"
              openDeleteModal={openModal}
              closeDeleteModal={closeModal}
            />
          </>
        )}
      />
      <DeleteDiaryFolderModal />
    </>
  );
}

const Container = styled.FlatList`
  background-color: white;
  padding: 16px 20px;
`;
