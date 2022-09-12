import React from 'react';
import styled from 'styled-components/native';
import {palette, theme} from '../../styles/theme.js';

const CommonInput = ({
  placeholder,
  handleChange,
  handleSubmit,
  bigger,
  value,
}) => {
  return (
    <Container bigger={bigger}>
      {bigger ? (
        <BiggerInput
          placeholder={placeholder}
          onChangeText={text => handleChange(text)}
          returnKeyLabel="완료"
          multiline={true}
          value={value}
          placeholderTextColor={palette.gray250}
        />
      ) : (
        <Input
          placeholder={placeholder}
          onChangeText={text => handleChange(text)}
          returnKeyLabel="완료"
          value={value}
          onSubmitEditing={() => handleSubmit()}
          placeholderTextColor={palette.gray250}
        />
      )}
    </Container>
  );
};

export default CommonInput;

const Container = styled.View`
  flex-direction: column;
  background-color: ${theme.colors.search};
  width: 100%;
  height: ${({bigger}) => (bigger ? '300px' : '50px')};
  border-radius: 10px;
  padding: 0 13px 0 20px;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  font-weight: 400;
  color: ${theme.colors.font};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  ::placeholder {
    color: ${theme.colors.searchText};
  }
`;

const BiggerInput = styled.TextInput`
  font-weight: 400;
  overflow: scroll;
  color: ${theme.colors.font};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  ::placeholder {
    color: ${theme.colors.searchText};
  }
`;
