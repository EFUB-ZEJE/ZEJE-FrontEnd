/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {theme} from '../../styles/theme';
import font from '../../styles/font.js';
import DropShadow from 'react-native-drop-shadow';
import {RightArrow} from '../../assets/icons';

export default function PhotoBanner({text, navigation, path}) {
  return (
    <DropShadow
      style={{
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.06,
        shadowRadius: 5,
      }}>
      <BoxContainer onPress={() => navigation.navigate(path)}>
        <Wrapper>
          <font.title.Subhead3>{text}</font.title.Subhead3>
          <RightArrow color={theme.colors.black} />
        </Wrapper>
        <Empty />
        {/* <ImageContainer source={require('../../assets/images/sample.jpeg')} /> */}
      </BoxContainer>
    </DropShadow>
  );
}

const BoxContainer = styled.TouchableOpacity`
  padding-bottom: 16px;
`;

const Empty = styled.View`
  background-color: white;
  width: 100%;
  height: 158px;
  border-radius: 10px;
`;

// const ImageContainer = styled.Image`
//   width: 100%;
//   height: 158px;
//   border-radius: 10px;
//   opacity: 0.1;
// `;

const Wrapper = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  z-index: 1;
`;
