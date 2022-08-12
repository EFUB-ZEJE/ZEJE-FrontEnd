import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import SizedBox from '../../common/SizedBox';
import SvgIcon from '../../common/SvgIcon';
import BottomSheet from '../../common/BottomSheet';
import {theme} from '../../../styles/theme';
import font from '../../../styles/font';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

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
    <BottomSheet modalVisible={modalVisible} setModalVisible={setModalVisible}>
      <HeaderContainer onPress={handleIconPress}>
        <font.title.Subhead3 color={theme.colors.main}>
          일기장 추가
        </font.title.Subhead3>
        <SvgIcon name="Close" size={'36px'} />
      </HeaderContainer>
      <SizedBox height={16} />

      <View>
        <KeyboardAwareScrollView
          enableOnAndroid
          extraScrollHeight={3}
          extraHeight={3}>
          <FolderInput
            placeholder="일기장 이름"
            returnKeyType="done"
            multiline={false}
            onChangeText={folder => setFolder(folder)}
            value={folder}
            onSubmitEditing={handleOnSubmitEditing}
          />
        </KeyboardAwareScrollView>
      </View>

      <SizedBox height={16} />
    </BottomSheet>
  );
}

const FolderInput = styled.TextInput`
  background-color: ${theme.colors.search};
  border-radius: 10px;
`;

const HeaderContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
