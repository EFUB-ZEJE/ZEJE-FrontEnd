import {atom} from 'recoil';

export const kakaoLoginState = atom({
  key: 'kakaoLoginState',
  default: {
    id: '',
    nickname: '',
    email: '',
    profileUrl: null,
  },
});

export const kakaoSigninState = atom({
  key: 'kakaoSigninState',
  default: {},
});
