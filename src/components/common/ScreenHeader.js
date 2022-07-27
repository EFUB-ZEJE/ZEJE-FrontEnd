import React from 'react';
import styled from 'styled-components/native';
import {palette, theme} from '../../styles/theme.js';
import font from '../../styles/font.js';
import {TouchableOpacity} from 'react-native';
import SvgIcon from '../common/SvgIcon';
import SizedBox from '../common/SizedBox';
import SearchBar from '../common/SearchBar';

const ScreenHeader = ({
  navigation: {goBack},
  screenTitle,
  canGoBack,
  rightIcon,
  canSearch,
  placeholder,
  handleChange,
}) => {
  return (
    <HeaderWrapper>
      <LineWrapper>
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
            <></>
          )}
          <font.title.Headline color={theme.colors.main}>
            {screenTitle}
          </font.title.Headline>
        </TitleWrapper>
        {/* 임시 */}
        <TouchableOpacity
          onPress={() => {
            goBack();
          }}>
          {rightIcon ? <SvgIcon name={rightIcon} /> : <></>}
        </TouchableOpacity>
      </LineWrapper>
      {canSearch ? (
        <SearchBar placeholder={placeholder} handleChange={handleChange} />
      ) : (
        <></>
      )}
    </HeaderWrapper>
  );
};

export default ScreenHeader;

const HeaderWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 16px;
  border-bottom-width: 1px;
  border-color: ${palette.gray150};
`;

// 아래 화면이랑 구분하기 위해서 임시로 gray
const LineWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 12px 0;
`;

const TitleWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
