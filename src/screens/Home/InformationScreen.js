import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Subhead3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import styled from 'styled-components';
import {palette, theme} from '../../styles/theme';
import {SizedBox, SvgIcon} from '../../components';

export default function InformationScreen({navigation}) {
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="정보"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Col>
          <Subhead3>버전정보</Subhead3>
          <SizedBox height={4} />
          <Body1 color={palette.gray300}>v 1.0.0</Body1>
        </Col>
        <Row>
          <Subhead3>이용약관</Subhead3>
          <TouchableOpacity onPress={() => navigation.navigate('ToSDetail')}>
            <SvgIcon name="RightArrow" color={palette.gray400} />
          </TouchableOpacity>
        </Row>
        <Row>
          <Subhead3>오픈소스 라이브러리</Subhead3>
          <TouchableOpacity onPress={() => navigation.navigate('OpenSource')}>
            <SvgIcon name="RightArrow" color={palette.gray400} />
          </TouchableOpacity>
        </Row>
      </ScreenContainer>
    </>
  );
}
const Col = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom-width: 1px;
  height: 77px;
  border-bottom-color: ${theme.colors.divider};
`;

const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  height: 56px;
  border-bottom-color: ${theme.colors.divider};
`;
