import { useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import THUMB from 'assets/images/reserve/complete_dog.png';
import styled from 'styled-components';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    display: block;
    width: 288px;
    height: 264px;
    margin-bottom: 40px;
  }
  p {
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 20px;
    font-weight: 400;
    letter-spacing: -0.6px;
  }
  p + p {
    margin-top: 12px;
    margin-bottom: 50px;
    strong {
      font-weight: 700;
    }
  }
`;
export default function Completed(props: { nextStep: () => void }) {
  return (
    <ProfileBox>
      <img src={THUMB} alt={THUMB} />
      <p>
        분양 신청이 완료되었습니다.
        <br />
        강아지 분양받기까지 일주일 정도 소요됩니다.
      </p>
      <p>
        <strong>분양승인</strong>시, 마이페이지 &lt; 분양신청내역에서
        <br />
        <strong>브리더 정보</strong>를 확인할 수 있습니다.
      </p>
      <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.MINT} onClick={props.nextStep}>
        홈으로
      </Button>
    </ProfileBox>
  );
}
