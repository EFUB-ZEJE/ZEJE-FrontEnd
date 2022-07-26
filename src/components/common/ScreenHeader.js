import React from 'react';
import styled from 'styled-components/native';
import SvgIcon from './SvgIcon';
import {theme} from '../../styles/theme.js';
import font from '../fonts/font.js';
import SizedBox from './SizedBox';
import {TouchableOpacity} from 'react-native';

const ScreenHeader = ({
  navigation: {goBack},
  screenTitle,
  canGoBack,
  rightIcon,
}) => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        {canGoBack ? (
          <>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}>
              <SvgIcon name="GoBack" />
            </TouchableOpacity>
            <SizedBox width={16} />
          </>
        ) : (
          <EmptyIcon />
        )}
        <font.title.Headline color={theme.colors.main}>
          {screenTitle}
        </font.title.Headline>
      </TitleWrapper>
      <TouchableOpacity
        onPress={() => {
          goBack();
        }}>
        {rightIcon ? <SvgIcon name={rightIcon} /> : <></>}
      </TouchableOpacity>
    </HeaderWrapper>
  );
};

export default ScreenHeader;

// 아래 화면이랑 구분하기 위해서 임시로 gray
const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: gray;
  padding: 12px 16px;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const EmptyIcon = styled.View`
  width: 20px;
`;
