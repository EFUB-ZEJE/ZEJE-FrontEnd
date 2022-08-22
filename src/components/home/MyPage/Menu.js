import React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import font, {Subhead3} from '../../../styles/font';
import {palette} from '../../../styles/theme';
import SvgIcon from '../../common/SvgIcon';
import SizedBox from '../../common/SizedBox';
const menus = [
  {
    name: ' 나의 후기 관리',
    icon: 'Review',
    onPress: () => console.log('후기관리페이지로'),
  },
  {
    name: ' 정보',
    icon: 'Bell',
    onPress: () => console.log('정보페이지로'),
  },
  {
    name: ' 정보',
    icon: 'Info',
    onPress: () => console.log('정보페이지로'),
  },
];

function MenuItem({text, icon, onPress}) {
  return (
    <Container>
      <SubContainer>
        <SvgIcon name={icon} color={palette.gray400} />
        <Subhead3 color={palette.gray600}>{text}</Subhead3>
      </SubContainer>
      <SvgIcon name={'RightArrow'} color={palette.gray400} />
    </Container>
  );
}

export default function Menu() {
  return (
    <>
      {menus.map(item => (
        <MenuItem
          key={item.name}
          text={item.name}
          icon={item.icon}
          onPress={item.onPress}
        />
      ))}
    </>
  );
}
const Container = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: 'white';

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 20px;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${palette.gray150};
`;

const SubContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
