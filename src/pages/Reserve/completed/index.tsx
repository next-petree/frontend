import { useState } from "react";
import THUMB from "assets/images/reserve/complete_dog.png";
import * as S from "./style";
import Button from "@component/Common/Button";

export default function Completed(props: { nextStep: () => void }) {
  return (
    <S.ProfileBox>
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
      <Button>홈으로</Button>
    </S.ProfileBox>
  );
}
