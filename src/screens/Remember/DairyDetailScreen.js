import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  ImageCard,
  AddButton,
} from '../../components';
export default function DairyDetailScreen({navigation}) {
  const [tourData, setTourData] = useState([
    {
      id: 0,
      title: '추천 여행지 이름 1',
      address: '추천 여행지 주소 1',
      liked: true,
      tag: 1,
    },
    {
      id: 1,
      title: '추천 여행지 이름 2',
      address: '추천 여행지 주소 2',
      liked: false,
      tag: 2,
    },
  ]);

  const _handleLikeChange = id => {
    let newData = tourData;
    newData[id].liked = !newData[id].liked;
    setTourData(newData);
  };

  return (
    <>
      <ScreenHeader
        navigation={navigation}
        canGoBack={true}
        screenTitle="일기보기"
      />
      <ScreenContainer>
        <AddButton
          text="추가하기"
          icon="PlusCircle"
          navigation={navigation}
          path="DairyPost"
        />
        {tourData.map(d => (
          <ImageCard
            key={d.id}
            id={d.id}
            title={d.title}
            address={d.address}
            liked={d.liked}
            handleLike={_handleLikeChange}
          />
        ))}
      </ScreenContainer>
    </>
  );
}
