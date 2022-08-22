import React from 'react';
import {HStack, Avatar} from 'native-base';
import {Text, View} from 'react-native';
import SvgIcon from '../../common/SvgIcon';
import {theme} from '../../../styles/theme';
import styled from 'styled-components';
function Profile({uri, type}) {
  if (type == 'view') {
    return (
      <HStack justifyContent="center" space={2} position="relative">
        <Avatar
          size={'xl'}
          source={{
            uri: uri
              ? uri
              : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
          }}
        />
      </HStack>
    );
  } else {
    // 편집모드
    return (
      <HStack justifyContent="center" space={2}>
        <Avatar
          size={'xl'}
          source={{
            uri: uri
              ? uri
              : 'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png',
          }}
        />
        <IconContainer>
          <SvgIcon name="Camera" color={theme.colors.main} />
        </IconContainer>
      </HStack>
    );
  }
}

const IconContainer = styled.TouchableOpacity`
  position: absolute;
  width: 26px;
  height: 26px;
  top: 75px;
  left: 195px;
`;

export default Profile;
