import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import SvgIcon from '../../common/SvgIcon';
import SizedBox from '../../common/SizedBox';
import BottomSheet from '../../common/BottomSheet';
import {theme, palette} from '../../../styles/theme';
import font from '../../../styles/font';
import styled from 'styled-components';

export default function AddfolderBottomSheet({
  modalVisible,
  setModalVisible,
  folderModalVisible,
  setFolderModalVisible,
  openDeleteModal,
  closeDeleteModal
}) {

  const handleIconPress = () => {
    console.log('handleIconPress Modal Close');
    setModalVisible(false);
  };

  const handleRevisePress = () => {
    console.log('handleRevisePress', folderModalVisible);
    setModalVisible(false);
    setFolderModalVisible(!folderModalVisible);
  };
  const handleDeletePress = () => {
    
    setModalVisible(false);
    openDeleteModal();
    console.log('handleDeletePress');
  };
  return (
    <KeyboardAvoidingView>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <IconContainer onPress={handleIconPress}>
          <SvgIcon name="Close" size={'36px'} />
          <SizedBox height={12} />
        </IconContainer>

        <ReviseContainer onPress={handleRevisePress}>
          <SizedBox height={16} />
          <font.title.Subhead2 color={theme.colors.black}>
            일기장 이름 수정
          </font.title.Subhead2>
          <SizedBox height={16} />
        </ReviseContainer>

        <DeleteContainer onPress={handleDeletePress}>
          <SizedBox height={16} />
          <font.title.Subhead2 color={theme.colors.black}>
            일기장 삭제
          </font.title.Subhead2>
          <SizedBox height={16} />
        </DeleteContainer>
       
      </BottomSheet>
    </KeyboardAvoidingView>
  );
}
const IconContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const DeleteContainer = styled.TouchableOpacity``;

const ReviseContainer = styled.TouchableOpacity``;
