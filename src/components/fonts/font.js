import styled from 'styled-components';

// Title
export const DisPlay5 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 40px;
  line-height: 52px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay4 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 36px;
  line-height: 46px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 32px;
  line-height: 42px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 28px;
  line-height: 38px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const DisPlay1 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 24px;
  line-height: 34px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Headline = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 20px;
  line-height: 28px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead1 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead_long2 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const Subhead_long3 = styled.Text`
  font-weight: bold;
  color: ${({color}) => (color ? color : 'black')};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.3px;
  font-family: 'Pretendard';
`;

export const regular = 400; //regular는 우선 400으로

export const Body1 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;
export const Body2 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;

export const Body_long1 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;
export const Body_long2 = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;

export const Caption = styled.Text`
  font-weight: ${regular};
  color: ${({color}) => (color ? color : 'black')};
  font-size: 12px;
  line-height: 28px;
  letter-spacing: -0.6px;
  font-family: 'Pretendard';
`;
// ------------------------------------------------------

export const font = {
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
