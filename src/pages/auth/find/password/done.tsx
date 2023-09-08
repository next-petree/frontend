import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGE from 'assets/images/character.svg';
import Button, { ButtonSize } from 'components/common/button/Button';
import DefaultLayout from 'layout/DefaultLayout';

const Image = styled.img`
  width: 6.313rem;
  height: 9.25rem;
  margin-bottom: 2rem;
`;

const Span = styled.span`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4rem;
`;

export default function FindPasswordDone() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <Image src={IMAGE} alt="find image" />
      <Span>비밀번호가 변경되었습니다.</Span>
      <Wrap>
        <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/login')}>
          로그인
        </Button>
      </Wrap>
    </DefaultLayout>
  );
}
