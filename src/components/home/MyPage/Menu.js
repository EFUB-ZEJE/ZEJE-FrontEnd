import React from 'react';
import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import font, {Subhead3} from '../../../styles/font';
import {palette} from '../../../styles/theme';
import SvgIcon from '../../common/SvgIcon';
import SizedBox from '../../common/SizedBox';

function MenuItem({text, icon, onPress}) {
  return (
    <Container>
      <SubContainer>
        <SvgIcon name={icon} color={palette.gray400} />
        <Subhead3 color={palette.gray600}>{text}</Subhead3>
      </SubContainer>
      <TouchableOpacity onPress={onPress}>
        <SvgIcon name={'RightArrow'} color={palette.gray400} />
      </TouchableOpacity>
    </Container>
  );
}

export default function Menu({navigation}) {
  const menus = [
    {
      name: ' 나의 후기 관리',
      icon: 'Review',
      onPress: () => navigation.navigate('MyReview'),
    },

    {
      name: ' 정보',
      icon: 'Info',
      onPress: () => navigation.navigate('Information'),
    },
  ];

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
