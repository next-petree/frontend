import { useState } from 'react';
import Button, { ButtonSize, ButtonColor } from 'components/common/button/Button';
import THUMB from 'assets/images/reserve/complete_dog.png';
import styled from 'styled-components';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ProfileImg = styled.img`
  display: flex-item;
  width: 288px;
  height: 264px;
  margin-right: 80px;
`;
export default function Completed(props: { nextStep: () => void }) {
  return (
    <ProfileBox>
      <ProfileImg src={THUMB} alt={THUMB} />
      <strong>
        분양 신청이 완료되었습니다.
        <br />
        일주일 정도 소요됩니다.
      </strong>
      <Button buttonSize={ButtonSize.MEDIUM} buttonColor={ButtonColor.MINT} onClick={props.nextStep}>
        홈으로
      </Button>
    </ProfileBox>
  );
}
