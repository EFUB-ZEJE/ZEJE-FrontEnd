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

const Background = styled.ImageBackground`
  width: 100%;
  height: 25%;
  background-color: lightgray;
  source: image;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 20px;
`;

const H3 = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 700;
`;

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export default function PhotoBanner({text, onClick}) {
  return (
    <Background>
      <Wrapper>
        <H3>{text}</H3>
        <Image source={Icon.RightArrowIcon} style={{width: 24, height: 24}} />
      </Wrapper>
    </Background>
  );
}
