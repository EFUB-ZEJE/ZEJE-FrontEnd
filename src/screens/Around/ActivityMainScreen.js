import React, { useState } from 'react';
import { Text } from 'react-native';
import {ScreenContainer, ScreenHeader, SearchBar} from '../../components';

//둘러보기
export default function ActivityMainScreen({navigation}) {
  const [search, setSearch] = useState('');
  const _handleChange = (text) => {setSearch(text);}
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="ZEJE의 추천 여행지"
        canGoBack={true}
        canSearch={true}
        placeholder="액티비티의 이름이나 주소를 검색해보세요"
        handleChange={_handleChange}
      />
      <ScreenContainer>
        <Text>검색어:</Text>
        <Text>{search}</Text>
      </ScreenContainer>
    </>
  );
};
