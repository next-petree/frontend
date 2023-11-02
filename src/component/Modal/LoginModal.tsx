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
}) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // 화면에 클릭 이벤트가 발생했을 때 실행되는 함수입니다.
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        // 클릭된 요소가 모달 외부인 경우 모달을 닫습니다.
        onClose();
      }
    };

    // 이벤트 리스너를 등록합니다.
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거합니다.
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleLogin = () => {
    // 로그인 처리 로직을 여기에 작성하세요.
    onLogin();
    navigate('/login');
  };

  const handleLogout = () => {
    // 로그아웃 처리 로직을 여기에 작성하세요.
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

  // 로컬 스토리지에 accessToken, refreshToken이 있는지 확인합니다.
  const isLoggedIn =
    localStorage.getItem('accessToken') && localStorage.getItem('refreshToken');

  return (
    <Modal ref={modalRef}>
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
