import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  DiaryCard,
  AddButton,
} from '../../components';
import {DeleteDiaryModal} from '../../modal/modals/Remember';
import {useDeleteDiaryFolderModal} from '../../modal/recoil/useModals';

export default function DairyDetailScreen({navigation}) {
  const [tourData, setTourData] = useState([
    {
      id: 0,
      title: '일기제목 1',
      date: '22.03.01',
    },
    {
      id: 1,
      title: '일기제목 2',
      date: '22.03.02',
    },
  ]);

  const {isModalOpen, openModal, closeModal} = useDeleteDiaryFolderModal();

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        canGoBack={true}
        screenTitle="일기보기"
      />
      <ScreenContainer>
        <AddButton
          height="56px"
          width="100%"
          text="추가하기"
          type="navigate"
          icon="PlusCircle"
          display="row"
          navigation={navigation}
          path="DairyPost"
        />
        {tourData.map(d => (
          <DiaryCard
            key={d.id}
            id={d.id}
            title={d.title}
            date={d.date}
            openModal={openModal}
            closeModal={closeModal}
          />
        ))}
        <DeleteDiaryModal />
      </ScreenContainer>
    </>
  );
}
