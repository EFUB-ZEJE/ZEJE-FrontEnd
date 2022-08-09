import React from 'react';
import {KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';
import SizedBox from '../../common/SizedBox';
import SvgIcon from '../../common/SvgIcon';
import BottomSheet from '../../common/BottomSheet';
import {theme} from '../../../styles/theme';
import font from '../../../styles/font';

export default function FolderTitle({
  modalVisible,
  setModalVisible,
  setFolder,
  folder,
}) {
  const handleIconPress = () => {
    console.log('handleIconPress');
    setModalVisible(false);
  };
  const handleOnSubmitEditing = () => {
    console.log(folder);
    setModalVisible(false);
  };
  return (
    <KeyboardAvoidingView>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        <HeaderContainer onPress={handleIconPress}>
          <font.title.Subhead3 color={theme.colors.main}>
            일기장 추가
          </font.title.Subhead3>
          <SvgIcon name="Close" size={'36px'} />
        </HeaderContainer>
        <SizedBox height={16} />
        <FolderInput
          placeholder="일기장 이름"
          returnKeyType="done"
          multiline={false}
          onChangeText={folder => setFolder(folder)}
          value={folder}
          onSubmitEditing={handleOnSubmitEditing}
        />
        <SizedBox height={16} />
      </BottomSheet>
    </KeyboardAvoidingView>
  );
}

const FolderInput = styled.TextInput`
  background-color: ${theme.colors.search};
  border-radius: 10px;
`;

const Container = styled.KeyboardAvoidingView``;

const HeaderContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
