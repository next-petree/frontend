import jwt from 'jwt-decode';

export interface JwtInfo {
  sub: string;
  iat: number;
  exp: number;
  email: string;
  role: 'ROLE_ADOPTER' | 'ROLE_BREEDER';
  certification: boolean;
}

export const decodeToken = (token: string): JwtInfo => {
  return jwt(token);
};
