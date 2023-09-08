import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGE from 'assets/images/character.svg';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import Input from 'components/common/input/InputButton';

const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 10rem;
  height: 14.688rem;
`;

const Span = styled.span`
  font-size: 2rem;
  color: #000000;
  margin-bottom: 2rem;
`;

const TextButton = styled.span`
  cursor: pointer;
  margin-right: 9rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export default function FindEmail() {
  const navigate = useNavigate();
  const [userName, setUesrName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');

  return (
    <Container>
      <Span>이메일 찾기</Span>
      <ContainerWrap>
        <Image src={IMAGE} alt="find image" />
        <Box>
          <Input label="이름" type="text" value={userName} onChange={(e) => setUesrName(e.target.value)} />
          <Wrap>
            <Input
              label="휴대번호"
              type="text"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              buttonColor={ButtonColor.DARKGRAY}
              buttonLabel={'인증 요청'}
            />
            <Input
              type="text"
              value={certificationNumber}
              onChange={(e) => setCertificationNumber(e.target.value)}
              buttonColor={ButtonColor.GRAY}
              buttonLabel={'인증 확인'}
            />
            <TextButton
              style={{ marginBottom: '4rem', justifyContent: 'right' }}
              onClick={() => navigate('/auth/find-password')}
            >
              비밀번호 찾기
            </TextButton>
          </Wrap>
        </Box>
      </ContainerWrap>
      <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/auth/find-email-complete')}>
        확인
      </Button>
    </Container>
  );
}
