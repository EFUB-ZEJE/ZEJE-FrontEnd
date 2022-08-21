import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import SvgIcon from '../common/SvgIcon';
import styled from 'styled-components';
import font from '../../styles/font';
import {theme, palette} from '../../styles/theme';

export default function ListInput({_addTask}) {
  const [text, setText] = useState('');

  const _onSubmit = () => {
    _addTask(text);
    setText('');
  };

  return (
    <Container>
      <TextInput
        value={text}
        placeholder="리스트를 입력해주세요."
        placeholderTextColor={palette.gray250}
        onChangeText={text => setText(text)}
        style={{color: 'black'}}
        onSubmitEditing={_onSubmit}
        autoCorrect={false}
        maxLength={30}
      />
      <TouchableOpacity onPress={_onSubmit}>
        <SvgIcon name="Add" size="24px" />
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${theme.colors.divider};
`;
const styles = StyleSheet.create({
  textInput: {
    height: '48px',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: theme.colors.divider,
  },
});
