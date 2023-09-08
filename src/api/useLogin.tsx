import axios, { AxiosError } from 'axios';
import { useModal } from 'hooks/useModal';
import { CONSTANTS } from '../constants';

type AuthError = {
  response: {
    data: {
      msg: string;
      isSuccess: boolean;
    };
  };
};

export const useLogin = () => {
  const LOC_KEY = CONSTANTS.ACCESS_TOKEN;
  const IMAGE_URL = CONSTANTS.PROFILE_IMAGE_URL;
  const { open } = useModal();

  const login = async (email: string, password: string) => {
    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });

      if (data.status === 'FAIL') {
        open(data.data, {
          closeOnOutsideClick: true,
          accept: {
            text: '확인',
            onClick: () => {},
          },
        });
        return;
      }

      if (data.status === 'SUCCESS') {
        localStorage.setItem(LOC_KEY, data.data.accessToken);
        localStorage.setItem(IMAGE_URL, data.data.profileImgUrl);
        window.location.href = '/';
      }
    } catch (e) {
      const err = e as AuthError;
      throw new AxiosError(err.response.data.msg);
    }
  };

  const logout = async () => {
    const token = localStorage.getItem(LOC_KEY);
    try {
      const { data } = await axios.post('/login', {
        Authentication: `Bearer ${token}`,
      });

      console.log(data);
    } catch (e) {
      throw new Error('로그아웃에 실패했습니다.');
    } finally {
      localStorage.removeItem(LOC_KEY);
      localStorage.removeItem(IMAGE_URL);
      window.location.href = '/';
    }
  };

  const isLoggedIn = () => {
    const token = localStorage.getItem(LOC_KEY);

    if (!token) {
      return false;
    }
    return true;
  };

  return { isLoggedIn, login, logout };
};
