import React, {useState} from 'react';
import {HStack, Avatar} from 'native-base';
import {Text, View} from 'react-native';
import SvgIcon from '../../common/SvgIcon';
import {theme} from '../../../styles/theme';
import styled from 'styled-components';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Profile({uri, type, setImage}) {
  const pickImage = async () => {
    try {
      const result = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: true,
        includeExtra: false,
      });

      setImage(result.assets[0]);
    } catch (e) {
      console.log(e);
    }
  };
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
  } else if (type == 'edit') {
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
        <IconContainer onPress={pickImage}>
          <SvgIcon name="CameraBadge" />
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
