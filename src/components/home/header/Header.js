import {Image, Row} from 'native-base';
import React from 'react';

export default function Header() {
  return (
    <Row justifyContent={'space-between'} px={18} py={5} bgColor={'white'}>
      <Image
        alt="logo"
        style={{width: 69, height: 33}}
        source={require(`../../../assets/images/logo.png`)}
      />
      <Row space={2}>
        <Image
          alt="mypage icon"
          size="32px"
          source={require(`../../../assets/images/mypage-icon.png`)}
        />
        <Image
          alt="alert icon"
          size="32px"
          source={require(`../../../assets/images/alert-icon.png`)}
        />
      </Row>
    </Row>
  );
}
