import React, {useRef} from 'react';
import styled, {css} from 'styled-components/native';
import {theme} from '../../../styles/theme';
import font from '../../../styles/font.js';
import SizedBox from '../../common/SizedBox';

export default function WriteEditor({
  title,
  body,
  onChangeTitle,
  onChangeBody,
}) {
  const bodyRef = useRef();
  return (
    <StyledRoot>
      <font.title.Subhead2 color={theme.colors.black}>제목</font.title.Subhead2>
      <SizedBox height={8} />
      <TitleInput
        placeholder="제목을 입력하세요"
        returnKeyType="next"
        onChangeTitle={onChangeTitle}
        maxLength={24}
        value={title}
        onSubmitEditing={() => bodyRef.current.focus()}
      />
      <SizedBox height={22} />
      <font.title.Subhead2 color={theme.colors.black}>
        기록하기
      </font.title.Subhead2>
      <SizedBox height={8} />
      <BodyInput
        placeholder="제주도 여행의 추억을 오래 기억하도록 기록을 남겨주세요"
        textAlignVertical="top"
        onChangeBody={onChangeBody}
        multiline={true}
        numberOfLines={9}
        value={body}
        ref={bodyRef}
      />
      <SizedBox height={22} />
    </StyledRoot>
  );
}

const StyledRoot = styled.View`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  justify-content: space-between;
  // height: ${props => props.height};
`;

const TextInput = css`
  background-color: ${theme.colors.search};
  border-radius: 10px;
  // margin-top: 8px;
`;

const TitleInput = styled.TextInput`
  ${TextInput}// padding: 8px;
`;

const BodyInput = styled.TextInput`
  ${TextInput}
  height: 246px;
  // padding: 15px;
`;
