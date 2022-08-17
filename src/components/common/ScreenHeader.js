import React from 'react';
import styled from 'styled-components/native';
import {palette, theme} from '../../styles/theme.js';
import font from '../../styles/font.js';
import {TouchableOpacity} from 'react-native';
import SvgIcon from '../common/SvgIcon';
import SizedBox from '../common/SizedBox';
import SearchBar from '../common/SearchBar';

const ScreenHeader = ({
  isHome,
  navigation,
  screenTitle,
  canGoBack,
  rightIcon,
  canSearch,
  placeholder,
  handleChange,
  handlePress,
  refSearchBar,
  onFocus,
  onSubmitEditing,
}) => {
  return (
    <HeaderWrapper>
      <LineWrapper>
        {isHome ? (
          <>
            <Logo alt="logo" source={require('../../assets/images/logo.png')} />
            <Wrapper>
              <TouchableOpacity
                onPress={() => navigation.navigate('MypageMain')}>
                <SvgIcon name="Mypage" />
              </TouchableOpacity>
              <SizedBox width={12} />
              <TouchableOpacity
                onPress={() => navigation.navigate('AlertMain')}>
                <SvgIcon name="Alert" />
              </TouchableOpacity>
            </Wrapper>
          </>
        ) : (
          <>
            <Wrapper>
              {canGoBack ? (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <SvgIcon name="GoBack" />
                  </TouchableOpacity>
                  <SizedBox width={16} />
                </>
              ) : (
                <SizedBox width={8} />
              )}
              <font.title.Headline color={theme.colors.main}>
                {screenTitle}
              </font.title.Headline>
            </Wrapper>
            <TouchableOpacity
              onPress={() => {
                handlePress();
              }}>
              {rightIcon ? <SvgIcon name={rightIcon} /> : <></>}
            </TouchableOpacity>
          </>
        )}
      </LineWrapper>
      {canSearch ? (
        <>
          <SizedBox height={8} />
          <SearchBar
            placeholder={placeholder}
            handleChange={handleChange}
            refSearchBar={refSearchBar}
            onFocus={onFocus}
            onSubmitEditing={onSubmitEditing}
          />
        </>
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
  padding: 18px 16px;
  border-bottom-width: 1px;
  border-color: ${palette.gray150};
`;

const LineWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.Image`
  width: 69px;
  height: 33px;
`;
