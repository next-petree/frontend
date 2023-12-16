export interface LoginResponse {
  status: string;
  data: {
    grantType: string;
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
    profileImgUrl: string | null;
  };
}

export interface RegisterResponse {
  status: string;
  data: string;
}
