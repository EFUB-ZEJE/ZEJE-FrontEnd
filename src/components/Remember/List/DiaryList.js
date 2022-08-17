/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components/native';
import DairyCard from '../DairyCard';
import PostBanner from '../PostBanner';

const data = [
  {id: '111', title: '일기 이름'},
  {id: '222', title: '일기 이름'},
  {id: '333', title: '일기 이름'},
  {id: '444', title: '일기 이름'},
  {id: '555', title: '일기 이름'},
  {id: '666', title: '일기 이름'},
  {id: '777', title: '일기 이름'},
];

export default function DiaryList({navigation}) {
  return (
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
            navigation={navigation}
            path="DairyPost"
          />
        );
      }}
      renderItem={({item}) => (
        <>
          <DairyCard
            id={item.id}
            title={item.title}
            navigation={navigation}
            path="DairyDetail"
          />
        </>
      )}
    />
  );
}

const Container = styled.FlatList`
  background-color: white;
  padding: 16px 20px;
`;
