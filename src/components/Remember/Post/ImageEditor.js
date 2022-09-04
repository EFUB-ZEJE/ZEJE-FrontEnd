import React, {useEffect, useState} from 'react';
import {Text, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {theme} from '../../../styles/theme';
import font from '../../../styles/font.js';
import SizedBox from '../../common/SizedBox';
import AddButton from '../AddButton';
import SvgIcon from '../../common/SvgIcon';
import {launchImageLibrary} from 'react-native-image-picker';
import {Platform, Pressable} from 'react-native';

const imagePickerOption = {
  mediaType: 'photo',
  maxWidth: 768,
  maxHeight: 768,
  includeBase64: Platform.OS === 'android',
};

export default function ImageEditor() {
  const MAX_IMG_CNT = 3;
  const [imgs, setImgs] = useState([]);

  const onPickImage = res => {
    // console.log("onPickImage",imgs.length)
    if (imgs.length >= MAX_IMG_CNT) {
      //3개 이상 이미지 추가 불가능 하게
      return;
    } else if (res.didCancel || !res) {
      return;
    } else if (res.assets[0].uri) {
      setImgs(imgs => [...imgs, res.assets[0].uri]);
    }
  };
  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const handleDeleteImg = item => {
    console.log('handleDismiss 특정 사진 삭제');
    setImgs(imgs.filter(img => img !== item));
  };

  useEffect(() => {
    console.log('remove');
  }, [imgs]);
  return (
    <StyledRoot>
      <font.title.Subhead2 color={theme.colors.black}>
        사진 올리기
      </font.title.Subhead2>
      <SizedBox height={8} />
      <PhotoContainer>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={imgs}
          keyExtractor={(_, index) => `${index}`}
          ListHeaderComponent={
            <>
              <AddButton
                type="function"
                handlefunction={onLaunchImageLibrary}
                width="60px"
                height="60px"
                text={`${imgs.length}/${MAX_IMG_CNT}`}
                icon="Camera"
                display="column"
                /* navigation={navigation} */
                /* path="DairyPost" */
              />
              <SizedBox width={8} />
            </>
          }
          renderItem={({item}) => (
            <>
              <Pressable
                onPress={() => {
                  handleDeleteImg(item);
                }}>
                <SvgIcon name="DismissCircle" size="14px" />
              </Pressable>
              <SelectedImage
                source={
                  item
                    ? {uri: item}
                    : require('../../../assets/images/sample.jpeg')
                }
                resizeMode="cover"
              />
            </>
          )}
          horizontal={true}
        />
      </PhotoContainer>
    </StyledRoot>
  );
}

const StyledRoot = styled.View`
  display: flex;
  flex-direction: column;
  // align-items: flex-start;
  // justify-content: space-between;
  // height: ${props => props.height};
`;
const PhotoContainer = styled.View`
  display: flex;
  flex-direction: row;
  // align-items: flex-start;
  // justify-content: space-between;
  // height: ${props => props.height};
`;
const SelectedImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;
