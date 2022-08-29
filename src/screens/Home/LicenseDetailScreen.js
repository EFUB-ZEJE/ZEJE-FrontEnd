//라이선스 세부

import {View, Text} from 'react-native';
import React from 'react';
import {Subhead3, Body1} from '../../styles/font';
import {ScreenHeader, ScreenContainer} from '../../components';
import {palette} from '../../styles/theme';
import {SizedBox} from '../../components';
export default function LicenseDetailScreen({navigation, route}) {
  const license = route.params;
  console.log(license);
  return (
    <>
      <ScreenHeader
        navigation={navigation}
        screenTitle="라이선스 상세"
        canGoBack={true}
        canSearch={false}
      />
      <ScreenContainer>
        <Subhead3>Library Name : {license.libraryName}</Subhead3>
        <SizedBox height={30} />
        <Body1 color={palette.gray350}>- version: {license.version}</Body1>
        <Body1 color={palette.gray350}>- License: {license._license}</Body1>
        <Body1 color={palette.gray350}>
          - description: {license._description}
        </Body1>

        <Body1 color={palette.gray350}>
          - licenseContent: {license._licenseContent}
        </Body1>
        <Body1 color={palette.gray350}>
          - repository: {license.repository.url}
        </Body1>
      </ScreenContainer>
    </>
  );
}
