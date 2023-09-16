import { useEffect, useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import Input from 'components/common/input/InputButton';
import LOGO from 'assets/images/logo_login.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useLogin } from 'api/useLogin';
import DefaultLayout from 'layout/DefaultLayout';
import { useModal } from 'hooks/useModal';

const Span = styled.span`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 2rem;
`;
const SpanColor = styled.span`
  font-size: 2.5rem;
  font-weight: 700;
  color: #4fd4d2;
  margin-bottom: 1rem;
`;
const TextButton = styled.span`
  cursor: pointer;
`;

const Logo = styled.img`
  width: 13.75rem;
  height: 4.5rem;
  margin-bottom: 4rem 0 2rem 0;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export default function Login() {
  const navigate = useNavigate();
  const { open } = useModal();
  const { login } = useLogin();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('petree_atk')) {
      window.alert('로그인이 필요합니다');
    }
  }, []);

  const handleSubmit = () => {
    if (email === '' || password === '') {
      open('메일주소 또는 비밀번호를 입력해주세요.', {
        closeOnOutsideClick: true,
        accept: {
          text: '확인',
          onClick: () => {},
        },
      });
      return;
    }

    login(email, password);
  };

  return (
    <DefaultLayout>
      <Logo src={LOGO} alt="logo" />
      <SpanColor>반려동물, 새로운 당신의 가족입니다.</SpanColor>
      <Span>또 하나의 가족 반려동물을 분양하세요.</Span>
      <Box>
        <Input label="이메일" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <TextButton
          style={{ marginBottom: '4rem', justifyContent: 'right' }}
          onClick={() => navigate('/auth/find-email')}
        >
          아이디 / 비밀번호 찾기
        </TextButton>
      </Box>
      <Button buttonSize={ButtonSize.MEDIUM} style={{ marginBottom: '1rem' }} onClick={handleSubmit}>
        로그인
      </Button>
      <Button buttonColor={ButtonColor.YELLOW} buttonSize={ButtonSize.MEDIUM} style={{ marginBottom: '1rem' }}>
        카카오톡 로그인
      </Button>
      <TextButton style={{ marginBottom: '4rem' }} onClick={() => navigate('/signup/step-1')}>
        아직 회원이 아니라면? 회원가입
      </TextButton>
    </DefaultLayout>
  );
}
