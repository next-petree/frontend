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
  margin-bottom: 1rem;
`;

const SpanColor = styled.span`
  font-size: 1rem;
  color: #ff5757;
  margin-bottom: 2rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4rem;
`;

export default function FindPasswordComplete() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <Image src={IMAGE} alt="find image" />
      <Span>비밀번호 찾기 완료</Span>
      <SpanColor>비밀번호를 변경해서 사용하세요.</SpanColor>
      <Input label="임시 비밀번호" labelStyle={{ width: '8rem' }} type="text" value={'1234'} />
      <Wrap>
        <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/auth/find-password-change')}>
          변경하기
        </Button>
      </Wrap>
    </DefaultLayout>
  );
}
