//이용약관

import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Subhead3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import {palette} from '../../styles/theme';
import OpenSourceLicense from '../../data/OpenSourceLicense';
import {SvgIcon} from '../../components';
import styled from 'styled-components';
import {theme} from '../../styles/theme';

export default function TosScreen({navigation}) {
  const renderItem = ({item}) => (
    <Row>
      <Subhead3>{item.libraryName}</Subhead3>
      <TouchableOpacity onPress={() => navigation.navigate('License', item)}>
        <SvgIcon name="RightArrow" color={palette.gray400} />
      </TouchableOpacity>
    </Row>
  );
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="오픈소스 라이브러리"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <FlatList
          data={OpenSourceLicense}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScreenContainer>
    </>
  );
}

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  height: 56px;
  border-bottom-color: ${theme.colors.divider};
`;
