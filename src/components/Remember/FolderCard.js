/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import styled from 'styled-components/native';
import font from '../../styles/font.js';
import SvgIcon from '../common/SvgIcon';
import FolderTitle from './BottomSheet/FolderTitle.js';
import ReviseFolder from './BottomSheet/ReviseFolder';

const FolderCard = ({
  id,
  title,
  navigation,
  path,
  openDeleteModal,
  closeDeleteModal,
}) => {
  const width = Dimensions.get('window').width;
  const [folder, setFolder] = useState(title);
  const [reviseModalVisible, setReviseModalVisible] = useState(false);
  const [folderModalVisible, setFolderModalVisible] = useState(false);

  const handlePressMore = () => {
    setReviseModalVisible(!reviseModalVisible);
  };
  return (
    <>
      <Container
        width={width}
        style={styles.shadowProp}
        onPress={() => navigation.navigate(path)}>
        <ImageContainer source={require('../../assets/images/sample.jpeg')} />
        <TextContainer>
          <View>
            <font.title.Subhead2>{title}</font.title.Subhead2>
          </View>
          <TouchableOpacity onPress={handlePressMore}>
            <SvgIcon name="More" />
          </TouchableOpacity>
        </TextContainer>
      </Container>
      <ReviseFolder
        modalVisible={reviseModalVisible}
        setModalVisible={setReviseModalVisible}
        folderModalVisible={folderModalVisible}
        setFolderModalVisible={setFolderModalVisible}
        openDeleteModal={openDeleteModal}
        closeDeleteModal={closeDeleteModal}
      />

      <FolderTitle
        modalVisible={folderModalVisible}
        setModalVisible={setFolderModalVisible}
        setFolder={setFolder}
        folder={folder}
      />
    </>
  );
};

export default FolderCard;

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
  margin-bottom: 22px;
`;

const ImageContainer = styled.Image`
  width: 100%;
  height: 105px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const TextContainer = styled.View`
  width: 100%;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 6px 12px 16px;
`;
