import {GET_ACCESS_TOKEN_API} from '../utils/api';

const AuthService = {
  getAccessToken: kakaoLoginResponse =>
    GET_ACCESS_TOKEN_API.post('/users/login', kakaoLoginResponse),
};

export default AuthService;
