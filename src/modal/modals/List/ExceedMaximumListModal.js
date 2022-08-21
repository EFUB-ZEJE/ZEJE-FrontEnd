import React from 'react';
import {View, Pressable} from 'react-native';
import {useExceedMaximumListModal} from '../../recoil/useModals';
import ModalSheet from '../../../components/common/modal/ModalSheet';
import font, {Subhead_long3, Body_long1, Body1} from '../../../styles/font';
import {theme, palette} from '../../../styles/theme';
import {SizedBox} from '../../../components';

import ModalButton from '../../../components/home/ModalButton';
import styled from 'styled-components';

const ExceedMaximumListModal = () => {
  const {isModalOpen, closeModal, openModal} = useExceedMaximumListModal();

  return (
    <ModalSheet isModalOpen={isModalOpen} closeModal={closeModal}>
      <ModalContainer>
        <Subhead_long3 color={palette.gray600}>
          작성 가능 리스트 갯수를 초과했어요
        </Subhead_long3>

        <Body_long1 color={palette.gray400}>
          필요없는 리스트를 지워주세요
        </Body_long1>
        <SizedBox height={9} />
        <View
          style={{
            alignSelf: 'flex-end',
          }}>
          <Pressable onPress={closeModal}>
            <Body1 color={theme.colors.main}>닫기</Body1>
          </Pressable>
        </View>
      </ModalContainer>
    </ModalSheet>
  );
};

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 132px;
  width: 280px;
  padding: 9px;
`;

export default ExceedMaximumListModal;
