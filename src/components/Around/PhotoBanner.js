import {ImageBackground, View, Text, Image} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import styled from 'styled-components';
import Icon from '../../assets/images/Icon';
import {theme} from '../../styles/theme';
/*https://reactnative.dev/docs/imagebackground*/
const image = {
  uri: 'https://a.cdn-hotels.com/gdcs/production98/d1029/31b58e32-dd0c-4b74-8b96-c4d873979ee3.jpg?impolicy=fcrop&w=1600&h=1066&q=medium',
};
import font from '../../styles/font.js';

const Background = styled.ImageBackground`
  width: 100%;
  height: 25%;
  background-color: white;
  source: image;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  filter: drop-shadow(0px 0px 32px rgba(0, 0, 0, 0.06));
  padding: 20px;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export default function PhotoBanner({text, onClick}) {
  return (
    <Background>
      <Wrapper>
        <font.title.Subhead3>{text}</font.title.Subhead3>
        <Image
          source={Icon.RightArrowIcon}
          style={{width: 20, height: 20, tintColor: theme.colors.black}}
        />
      </Wrapper>
    </Background>
  );
}
