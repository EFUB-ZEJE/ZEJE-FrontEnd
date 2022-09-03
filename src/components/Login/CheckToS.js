import {Row} from 'native-base';
import React from 'react';
import styled from 'styled-components';
import {Body1} from '../../styles/font';
import {palette} from '../../styles/theme';
import SvgIcon from '../common/SvgIcon';

export default function CheckToS({onPress}) {
  return (
    <Wrapper onPress={onPress}>
      <Row space={1}>
        <SvgIcon name="EmptyBox" size={'24px'} />
        <Body1>이용 약관 동의하기</Body1>
      </Row>
      <SvgIcon name="RightArrow" size={'24px'} color={palette.gray400} />
    </Wrapper>
  );
}

const Wrapper = styled.Pressable`
  position: absolute;
  bottom: 130px;
  width: 320px;
  justify-content: space-between;
  flex-direction: row;
`;
