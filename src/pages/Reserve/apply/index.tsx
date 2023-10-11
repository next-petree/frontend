import React from "react";
import * as S from "./style";
import Button from "@component/common/Button";
export default function Apply() {
  return (
    <>
      <S.ProfileBox>
        <S.DemantionBox>
          <h3>1. 반려동물을 분양하려는 사유에 대해 간단히 작성 해 주세요.</h3>
          <div className="areabox">
            <textarea
              placeholder="분양하려는 사유를 작성해주세요"
              maxLength={2000}
            ></textarea>
            <span>{""} / 2000</span>
          </div>
        </S.DemantionBox>
        <S.DemantionBox>
          <h3>
            2. 해당 견종을 분양하는 것에 있어 자신의 마음가짐을 작성해주세요.
          </h3>
          <div className="areabox">
            <textarea
              placeholder="분양 이유와 마음가짐을 작성해주세요"
              maxLength={2000}
            ></textarea>
            <span>{""} / 2000</span>
          </div>
        </S.DemantionBox>
      </S.ProfileBox>

      <S.ButtonWrap>
        <Button>예약신청</Button>
        <Button>취소</Button>
      </S.ButtonWrap>
    </>
  );
}
