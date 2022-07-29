import React, {useState} from 'react';
import {
  ScreenContainer,
  ScreenHeader,
  SizedBox,
  SortButton,
} from '../../components';
import {Text} from 'react-native';
import Map from './Map';
import styled from 'styled-components';
import BottomSheet from '../../components/common/BottomSheet';
import font from '../../styles/font';
import {palette, theme} from '../../styles/theme';
import SvgIcon from '../../components/common/SvgIcon';

export default function SpotMainScreen({navigation}) {
  const [sortType, setSortType] = useState('내 위치 중심');
  const [viewType, setViewType] = useState('List');
  const [modalVisible, setModalVisible] = useState(true);
  const [flower, setFlower] = useState(10); // 받을 수 있는 꽃 개수

  const _handlePressSortButton = () => {
    if (sortType === '내 위치 중심') {
      setSortType('지도 중심');
    } else {
      setSortType('내 위치 중심');
    }
  };
  const _handlePressViewTypeButton = () => {
    if (viewType === 'List') {
      setViewType('Map');
    } else {
      setViewType('List');
    }
  };

  // 전체 모달 종류
  const modalContents = {
    getPossibleFlowers: (
      <ModalContainer height="78px">
        <font.title.Subhead3 color={theme.colors.main}>
          오늘 10 개의 꽃을 받을 수 있어요!
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          친환경 스팟을 선택해주세요
        </font.body.Body1>
      </ModalContainer>
    ),

    getAllFlowers: (
      <ModalContainer height="196px">
        <SvgIcon name="NotFound" size={'130px'} />
        <SizedBox height={16} />
        <font.title.Subhead3 color={theme.colors.main}>
          10개의 꽃을 모두 받았어요!
        </font.title.Subhead3>
      </ModalContainer>
    ),

    notFound: (
      <ModalContainer height="228px">
        <SvgIcon name="NotFound" size={'130px'} />
        <font.title.Subhead3 color={theme.colors.main}>
          주위에 친환경 스팟이 없어요.
        </font.title.Subhead3>
        <font.body.Body1 color={palette.gray400}>
          다른 위치로 이동해보세요.
        </font.body.Body1>
      </ModalContainer>
    ),
  };

  // 어짜피 모달이 새로 켜지면 modalVisible값이 변화하여 화면이 새로 렌더링 될테니
  // state 변수로 선언해줄 필요 없지 않을까?

  const modalChildren = modalContents.notFound;

  return (
    <>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}>
        {modalChildren}
      </BottomSheet>
      {/**모달창 하나로 children 만 바꿔쓰기 */}
      <ScreenHeader
        navigation={navigation}
        screenTitle="내 주변의 친환경 스팟"
        canGoBack={true}
        canSearch={false}
        rightIcon={viewType}
        handlePress={_handlePressViewTypeButton}
      />
      <>
        {viewType === 'List' ? (
          <Map />
        ) : (
          <>
            <Text>리스트</Text>
            <SortButton
              sortBy={sortType}
              handlePress={_handlePressSortButton}
            />
          </>
        )}
      </>
    </>
  );
}

const ModalContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => (height ? height : '228px')};
  padding: 16px;
`;
