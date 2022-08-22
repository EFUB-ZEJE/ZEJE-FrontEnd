import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components';
import {palette, theme} from '../../../styles/theme';
import font, {Subhead3, Body1} from '../../../styles/font';
import SvgIcon from '../../common/SvgIcon';

import SizedBox from '../../common/SizedBox';

export default function UserInfo({name, email, onPress}) {
  return (
    <Container>
      <Wrapper>
        <Subhead3>{name}님 안녕하세요!</Subhead3>
        <SizedBox height={9} />
        <Body1>{email}</Body1>
      </Wrapper>
      <IconContainer onPress={onPress}>
        <SvgIcon name="RightArrow" size={'30px'} color={palette.gray400} />
      </IconContainer>
    </Container>
  );
}
const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 370px;
`;

const Wrapper = styled.View`
  display: flex;
  //width: 256px;
  justify-content: center;
  align-items: flex-start;
`;
const IconContainer = styled.TouchableOpacity`
  display: flex;
  width: 24px;
  height: 46px;
  justify-content: center;
  align-items: center;
`;
