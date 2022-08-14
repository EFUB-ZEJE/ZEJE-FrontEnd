import React from 'react';
import {BasektThree, BasketEmpty, BasketOne, BasketTwo} from '../../assets';
import {useBaksetModal} from '../../modal/recoil/useModals';
import styled from 'styled-components/native';

export const NumOfFruit = 3;

export default function Basket() {
  const {openModal} = useBaksetModal();

  return (
    <Pressable onPress={openModal}>
      {NumOfFruit === 0 ? (
        <BasketEmpty width={99} height={71} />
      ) : NumOfFruit === 1 ? (
        <BasketOne width={99} height={71} />
      ) : NumOfFruit === 2 ? (
        <BasketTwo width={99} height={71} />
      ) : (
        <BasektThree width={99} height={71} />
      )}
      <Caption>
        열매{' '}
        <Caption style={{fontWeight: '700'}}>
          {NumOfFruit < 100 ? `${NumOfFruit}개` : '99+개'}
          {'\n'}
          기부하기
        </Caption>
      </Caption>
    </Pressable>
  );
}

const Pressable = styled.Pressable`
  position: absolute;
  z-index: 5;
  right: 12%;
  bottom: 17%;
`;

const Caption = styled.Text`
  font-size: 12px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  position: absolute;
  display: flex;
  width: 100%;
  text-align: center;
  top: 45%;
  color: white;
`;
