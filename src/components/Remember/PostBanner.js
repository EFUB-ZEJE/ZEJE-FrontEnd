/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import styled from 'styled-components';
import {StyleSheet, Dimensions} from 'react-native';
import {palette} from '../../styles/theme';
import font from '../../styles/font.js';
import SvgIcon from '../../components/common/SvgIcon';
import SizedBox from '../common/SizedBox';

export default function PostBanner({text, icon, navigation, path}) {
  const width = Dimensions.get('window').width;
  return (
    <>
      <Container
        width={width}
        /* style={styles.shadowProp} */
        onPress={() => navigation.navigate(path)}>
        <font.title.Subhead3 color={palette.gray250}>
          {text}
        </font.title.Subhead3>
        <SvgIcon name={icon} size="24px" color={palette.gray250} />
      </Container>
      <SizedBox height={22} />
    </>
  );
}

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    elevation: 32,
  },
});

const Container = styled.TouchableOpacity`
  width: ${({width}) => (width - 40) / 2 - 8}px;
  height: 152px;
  border-radius: 10px;
  background-color: ${palette.gray100};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 47px 0;
`;
