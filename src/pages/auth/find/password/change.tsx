import React, { useState } from 'react';
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

export default function FindPasswordChange() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  return (
    <DefaultLayout>
      <Image src={IMAGE} alt="find image" />
      <Span>비밀번호 변경하기</Span>
      <Input label="임시 비밀번호" labelStyle={{ width: '8rem' }} type="text" value={'1234'} />
      <Input
        label="새 비밀번호"
        labelStyle={{ width: '8rem' }}
        type="text"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Input
        label="비밀번호 확인"
        labelStyle={{ width: '8rem' }}
        type="text"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
      />
      <Wrap>
        <Button buttonSize={ButtonSize.MEDIUM} onClick={() => navigate('/auth/find-password-done')}>
          변경하기
        </Button>
      </Wrap>
    </DefaultLayout>
  );
}
