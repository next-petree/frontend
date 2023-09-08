import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGE from 'assets/images/character.svg';
import Button, { ButtonSize } from 'components/common/button/Button';
import Input from 'components/common/input/InputButton';
import DefaultLayout from 'layout/DefaultLayout';

const Image = styled.img`
  width: 6.313rem;
  height: 9.25rem;
  margin-bottom: 2rem;
`;

const Span = styled.span`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4rem;
`;

const Gap = styled.div`
  margin-right: 2.5rem;
`;

export default function FindEmailComplete() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <Image src={IMAGE} alt="find image" />
      <Span>이메일 찾기 완료</Span>
      <Input label="이메일" type="text" value={'ID123@@gmail.com'} />
      <Wrap>
        <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/login')}>
          로그인
        </Button>
        <Gap />
        <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/auth/find-password')}>
          비밀번호 찾기
        </Button>
      </Wrap>
    </DefaultLayout>
  );
}
