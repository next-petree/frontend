import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { get } from '../../api/api';
import Icon from '../../assets/icons/Group 21.jpg';
import { LoginModalProps, LogoutResponse } from '../../types/index';
import {
  Modal,
  Title,
  LoginBtn,
  LogoutBtn,
  Wrapper,
  Img,
} from './LoginModalStyle';

const LoginModal: React.FC<LoginModalProps> = ({
  onLogin,
  onClose,
  errorMessage,
  top,
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    // 이벤트 리스너를 등록합니다.
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogin = () => {
    onLogin();
    navigate('/login');
  };

  const handleLogout = () => {
    const Logout = async () => {
      try {
        const response = await get<LogoutResponse>('/api/logout');

        if (response.data.status === 'SUCCESS') {
          console.log('로그아웃!', response.data);
          localStorage.removeItem('accessToken');
          localStorage.removeItem('refreshToken');
        }
      } catch (error: any) {
        console.log(error);
      }
    };
    Logout();
    onClose();
    navigate('/login');
  };

  const isLoggedIn =
    localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');

  return (
    <Modal ref={modalRef} style={{ top: `${top}%` }}>
      <Wrapper>
        <Img src={Icon} />
        <Title>{errorMessage}</Title>
      </Wrapper>
      <Wrapper>
        {/* {!isLoggedIn && <LoginBtn onClick={handleLogin}>로그인</LoginBtn>}
        {isLoggedIn && <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>} */}
        <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
        <LogoutBtn onClick={handleLogout}>로그아웃</LogoutBtn>
      </Wrapper>
    </Modal>
  );
};

export default LoginModal;
