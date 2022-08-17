import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import FolderCard from '../FolderCard';
import PostBanner from '../PostBanner';
import DeleteDiaryFolderModal from '../../../modal/modals/Remember/DeleteDairyFolderModal';
import {useDeleteDiaryFolderModal} from '../../../modal/recoil/useModals';

const data = [
  {id: '111', title: '일기 이름'},
  {id: '222', title: '일기 이름'},
  {id: '333', title: '일기 이름'},
  {id: '444', title: '일기 이름'},
  {id: '555', title: '일기 이름'},
  {id: '666', title: '일기 이름'},
  {id: '777', title: '일기 이름'},
];

export default function FolderList({
  navigation,
  modalVisible,
  setModalVisible,
}) {
  const {isModalOpen, openModal, closeModal} = useDeleteDiaryFolderModal();
  const handlePostBanner = () => {
    console.log(modalVisible);
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <Container
        data={data}
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
              id={item.id}
              title={item.title}
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
