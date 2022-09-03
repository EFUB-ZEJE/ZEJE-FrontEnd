import {useRecoilState} from 'recoil';
import {kakaoLoginState, kakaoSigninState} from '../states/kakaoLoginState';
import {
  getProfile as getKakaoProfile,
  login,
  logout,
  unlink,
} from '@react-native-seoul/kakao-login';

export const useKakaoLogin = () => {
  const [kakaoLoginResponse, setKakaoLoginResponse] =
    useRecoilState(kakaoLoginState);
  const [kakaoSignin, setKakaoSignin] = useRecoilState(kakaoSigninState);

  // 카카오 로그인
  const signInWithKakao = async () => {
    try {
      const kakaoToken = await login();
      setKakaoSignin(true);
    } catch (err) {
      console.error('kakao login err', err);
    }
  };

  // 카카오 로그아웃
  const signOutWithKakao = async () => {
    try {
      const message = await logout();
      console.log('logout:', message);
      setKakaoSignin(false);
      setKakaoLoginResponse(() => ({
        id: '',
        nickname: '',
        email: '',
        profileUrl: '',
      }));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('signOut error', err);
    }
  };

  // 프로필 불러오기
  const getProfile = async () => {
    try {
      const profile = await getKakaoProfile();
      setKakaoLoginResponse(() => ({
        id: profile.id,
        nickname: profile.nickname,
        email: profile.email,
        profileUrl: profile.profileImageUrl,
      }));
    } catch (err) {
      console.error('getProfile error', err);
    }
  };

  // 연동 해제
  const unlinkKakao = async () => {
    try {
      const message = await unlink();
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('unlinkKakao error', err);
    }
  };

  return {
    kakaoSignin,
    kakaoLoginResponse,
    signInWithKakao,
    signOutWithKakao,
    getProfile,
    unlinkKakao,
  };
};
