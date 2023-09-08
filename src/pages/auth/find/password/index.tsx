import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IMAGE from 'assets/images/character.svg';
import Button, { ButtonColor, ButtonSize } from 'components/common/button/Button';
import Input from 'components/common/input/InputButton';
import DefaultLayout from 'layout/DefaultLayout';

const ContainerWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
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

export default function FindPassword() {
  const navigate = useNavigate();
  const [userName, setUesrName] = useState('');
  const [userId, setUserId] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [certificationNumber, setCertificationNumber] = useState('');

  return (
    <DefaultLayout>
      <Span>비밀번호 찾기</Span>
      <ContainerWrap>
        <Image src={IMAGE} alt="find image" />
        <Box>
          <Input label="아이디" type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
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
          </Wrap>
        </Box>
      </ContainerWrap>
      <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/auth/find-password-complete')}>
        확인
      </Button>
    </DefaultLayout>
  );
}
