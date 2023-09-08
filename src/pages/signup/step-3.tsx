import styled from '@emotion/styled';
import SignupLayout from 'layout/SignupLayout';
import IMG from 'assets/images/signup/signup.svg';
import STEP from 'assets/images/signup/step3.svg';
import Button, { ButtonSize } from 'components/common/button/Button';
import { useNavigate } from 'react-router-dom';

export default function Step3() {
  const navigate = useNavigate();
  return (
    <SignupLayout>
      <Img src={STEP} alt="step3" />
      <CharacterImg src={IMG} alt="signup" />
      <Span>회원가입이 완료되었습니다.</Span>
      <Button
        buttonSize={ButtonSize.LARGE}
        onClick={() => {
          navigate('/login');
        }}
      >
        로그인 하기
      </Button>
    </SignupLayout>
  );
}
const Img = styled.img`
  width: 15rem;
  height: 4.938rem;
  margin: 3rem 0;
`;

const CharacterImg = styled.img`
  width: 16.521;
  height: 16.521;
`;

const Span = styled.span`
  font-weight: 500;
  font-size: 2rem;
  color: #000000;
  margin: 3rem 0 4rem 0;
`;
