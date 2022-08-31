import React from 'react';
import {LetterSvg} from '../../assets';
import {useLetterModal} from '../../modal/recoil/useModals';
import styled from 'styled-components/native';

export default function Letter() {
  const {openModal} = useLetterModal();

  return (
    <Pressable onPress={openModal}>
      <LetterSvg />
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  position: absolute;
  z-index: 5;
  left: 16%;
  bottom: 14%;
`;
