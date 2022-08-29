import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Subhead_long3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import styled from 'styled-components';
import {palette, theme} from '../../styles/theme';
import {SizedBox, SvgIcon} from '../../components';

export default function MyReviewScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="나의 후기 관리"
        canGoBack={true}
        canSearch={false}
      />
      <Center>
        <SvgIcon name={'RedOrange'} />
        <SizedBox height={50} />
        <Subhead_long3 color={theme.colors.main}>
          작성된 후기가 없습니다.
        </Subhead_long3>
      </Center>
    </>
  );
}

const Center = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
