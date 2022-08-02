import React, {useEffect, useState} from 'react';
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
  const [cnt, setCnt] = useState(0);
  const [img0, setImg0] = useState(null);
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);

  const onPickImage = res => {
    if (res.didCancel || !res) {
      return;
    }
    if (!img0) {
      setImg0(res.assets[0].uri);
    } else if (!img1) {
      setImg1(res.assets[0].uri);
    } else if (!img2) {
      setImg2(res.assets[0].uri);
    } else {
      return;
    }
  };
  const onLaunchImageLibrary = () => {
    launchImageLibrary(imagePickerOption, onPickImage);
  };

  const handleDismiss = idx => {
    console.log('handle', idx, 'photo');

    if (idx == 0) {
      setImg0(null);
    } else if (idx == 1) {
      setImg1(null);
    } else if (idx == 2) {
      setImg2(null);
    }
    // setImg({...imgs, ${idx}: null});
  };

  useEffect(() => {
    console.log('remove');
  }, [img0, img1, img2]);
  return (
    <StyledRoot>
      <font.title.Subhead2 color={theme.colors.black}>
        사진 올리기
      </font.title.Subhead2>
      <SizedBox height={8} />
      <PhotoContainer>
        <AddButton
          type="function"
          handlefunction={onLaunchImageLibrary}
          width="60px"
          height="60px"
          text={`${cnt}/3`}
          icon="Camera"
          display="column"
          /* navigation={navigation} */
          /* path="DairyPost" */
        />
        <SizedBox width={8} />
        <Pressable
          onPress={() => {
            handleDismiss(String(0));
          }}>
          <SvgIcon name="DismissCircle" size="14px" />
        </Pressable>
        <SelectedImage
          source={
            img0 ? {uri: img0} : require('../../../assets/images/sample.jpeg')
          }
          resizeMode="cover"
        />
        <SizedBox width={8} />
        <Pressable onPress={() => handleDismiss(1)}>
          <SvgIcon name="DismissCircle" size="14px" />
        </Pressable>
        <SelectedImage
          source={
            img1 ? {uri: img1} : require('../../../assets/images/sample.jpeg')
          }
        />
        <SizedBox width={8} />
        <Pressable onPress={() => handleDismiss(2)}>
          <SvgIcon name="DismissCircle" size="14px" />
        </Pressable>
        <SelectedImage
          source={
            img2 ? {uri: img2} : require('../../../assets/images/sample.jpeg')
          }
        />
        <SizedBox width={8} />
      </PhotoContainer>

      <SizedBox height={22} />
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
