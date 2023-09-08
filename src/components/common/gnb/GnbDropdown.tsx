import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import Dropdown from '../dropdown/Dropdown';
import { useOutsideClick } from 'hooks/useOutsideClick';
import { styled } from 'styled-components';
import ProfilePic from '../profile-pic/ProfilePic';
import Button from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'api/useLogin';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

interface Props {
  isLoggedIn?: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  role?: string;
}

export default function GnbDropdown({ isLoggedIn, setOpen, role }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setOutsideClick] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { logout } = useLogin();

  useOutsideClick(ref, () => setOutsideClick(true));

  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const firstButtonClicked = () => {
    if (isLoggedIn) navigate('/mypage/adopt');
    else navigate('/login');
    setOpen(false);
  };

  const secondButtonClicked = () => {
    if (isLoggedIn) {
      logout();
      navigate('/');
    } else navigate('/signup/step-1');
    setOpen(false);
  };

  return (
    <Dropdown
      ref={ref}
      style={{
        bottom: '-11rem',
        right: 10,
        padding: '1.38rem 1.63rem',
      }}
    >
      <ProfileContainer>
        <ProfilePic
          style={{
            width: '2.5rem',
            height: '2.5rem',
          }}
        />
        {isLoggedIn ? (
          <span>
            안녕하세요,
            <br />
            {role === 'BREEDER' ? '브리더' : '유저'}님
          </span>
        ) : (
          <span>
            서비스 이용을 위해 <br />
            로그인 해주세요.
          </span>
        )}
      </ProfileContainer>
      <ButtonContainer>
        <Button
          style={{
            width: '7.5rem',
            height: '3.625rem',
            fontSize: '1rem',
            fontWeight: 700,
          }}
          onClick={firstButtonClicked}
        >
          {isLoggedIn ? '마이 페이지' : '로그인'}
        </Button>
        <Button
          style={{
            width: '7.5rem',
            height: '3.625rem',
            fontSize: '1rem',
            backgroundColor: '#fff',
            color: '#4EC1BF',
            border: '1px solid #4EC1BF',
            fontWeight: 700,
          }}
          onClick={secondButtonClicked}
        >
          {isLoggedIn ? '로그아웃' : '회원가입'}
        </Button>
      </ButtonContainer>
    </Dropdown>
  );
}
