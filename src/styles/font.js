import styled from 'styled-components';

const k = 1;
// Title
export const DisPlay5 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${40 * k}px;
  line-height: ${52 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay4 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${36 * k}px;
  line-height: ${46 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${32 * k}px;
  line-height: ${42 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${28 * k}px;
  line-height: ${38 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay1 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${24 * k}px;
  line-height: ${34 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Headline = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${20 * k}px;
  line-height: ${28 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead1 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${12 * k}px;
  line-height: ${18 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${14 * k}px;
  line-height: ${20 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${16 * k}px;
  line-height: ${22 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead_long2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${14 * k}px;
  line-height: ${24 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead_long3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${16 * k}px;
  line-height: ${28 * k}px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const regular = 400; //regular는 우선 400으로

export const Body1 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${14 * k}px;
  line-height: ${20 * k}px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;
export const Body2 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${16 * k}px;
  line-height: ${24 * k}px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;

export const Body_long1 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${14 * k}px;
  line-height: ${24 * k}px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
  text-align: center;
`;
export const Body_long2 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${16 * k}px;
  line-height: ${28 * k}px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;

export const Caption = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: ${12 * k}px;
  line-height: ${28 * k}px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;
// ------------------------------------------------------
const font = {
  title: {
    DisPlay1: DisPlay1,
    DisPlay2: DisPlay2,
    DisPlay3: DisPlay3,
    DisPlay4: DisPlay4,
    DisPlay5: DisPlay5,
    Headline: Headline,
    Subhead1: Subhead1,
    Subhead2: Subhead2,
    Subhead3: Subhead3,
    Subhead_long2: Subhead_long2,
    Subhead_long3: Subhead_long3,
  },

  body: {
    Body1: Body1,
    Body2: Body2,
    Body_long1: Body_long1,
    Body_long2: Body_long2,
    Caption: Caption,
  },
};

export default font;
