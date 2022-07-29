/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components';
import {palette} from '../../styles/theme';
import font from '../../styles/font.js';
import {SvgIcon} from '../../components';

export default function PostBanner({text, icon, navigation, path}) {
  const width = Dimensions.get('window').width;
  return (
    <Container
      style={styles.shadowProp}
      width={width}
      onPress={() => navigation.navigate(path)}>
      <font.title.Subhead3 color={palette.gray200}>{text}</font.title.Subhead3>
      <SvgIcon name={icon} size="24px" color={palette.gray400} />
    </Container>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    elevation: 32,
  },
});

const Container = styled.TouchableOpacity`
  width: ${({width}) => (width - 40) / 2 - 8}px;
  height: 152px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 47px 0;
`;
