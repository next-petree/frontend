import base64 from 'base-64';

const accessToken = localStorage.getItem('accessToken');
const refreshToken = localStorage.getItem('refreshToken');

if (accessToken) {
  const decodedAccessToken = base64.decode(accessToken);
  console.log('Decoded Access Token:', decodedAccessToken);
}

if (refreshToken) {
  const decodedRefreshToken = base64.decode(refreshToken);
  console.log('Decoded Refresh Token:', decodedRefreshToken);
}
