import Checkbox, { Size } from 'components/common/checkbox/Checkbox';
import SignupLayout from 'layout/SignupLayout';
import styled from 'styled-components';
import STEP from 'assets/images/signup/step1.svg';
import { useState } from 'react';
import SlideDown from 'components/signup/SlideDown';
import Button, { ButtonSize } from 'components/common/button/Button';
import { useNavigate } from 'react-router-dom';
import { useModal } from 'hooks/useModal';

export default function Step1() {
  const navigate = useNavigate();
  const { open } = useModal();

  const [isAllChecked, setAllChecked] = useState(false);
  const [checkedState, setCheckedState] = useState(new Array(3).fill(false));

  const handleAllCheck = () => {
    setAllChecked((prev) => !prev);
    let array = new Array(3).fill(!isAllChecked);
    setCheckedState(array);
  };

  const handleMonoCheck = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) => (index === position ? !item : item));
    setCheckedState(updatedCheckedState);
    const checkedLength = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);
    setAllChecked(checkedLength === updatedCheckedState.length);
  };

  const handleClickButton = () => {
    if (checkedState[0] && checkedState[1] && checkedState[2]) {
      navigate('/signup/step-2');
    } else {
      open('전체 동의를 해주셔야 가입이 가능합니다.', {
        closeOnOutsideClick: true,
        accept: {
          text: '확인',
          onClick: () => {},
        },
      });
    }
  };

  return (
    <SignupLayout>
      <Img src={STEP} alt="step3" />
      <Container>
        <Title>회원가입</Title>
        <Checkbox size={Size.LARGE} value={isAllChecked} label={'전체 동의 하기'} onChange={() => handleAllCheck()} />
        <Span>이용 약관, 개인정보 수집 및 이용, 위치기반서비스 이용 약관을 포함합니다.</Span>
        <Checkbox size={Size.SMALL} value={checkedState[0]} label={'이용약관'} onChange={() => handleMonoCheck(0)} />
        <SlideDown title={'이용약관'} content={''} />
        <Checkbox size={Size.SMALL} value={checkedState[1]} label={'이용약관'} onChange={() => handleMonoCheck(1)} />
        <SlideDown title={'개인정보 수집 및 이용'} content={''} />
        <Checkbox size={Size.SMALL} value={checkedState[2]} label={'이용약관'} onChange={() => handleMonoCheck(2)} />
        <SlideDown title={'위치기반서비스 이용 약관'} content={''} />
      </Container>
      <Button buttonSize={ButtonSize.MEDIUM} onClick={() => handleClickButton()}>
        다음
      </Button>
    </SignupLayout>
  );
}

const Container = styled.div`
  display: flex;
  width: 51.438rem;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

const Img = styled.img`
  width: 15rem;
  height: 4.938rem;
  margin: 3rem 0;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  font-size: 1rem;
`;
