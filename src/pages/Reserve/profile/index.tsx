import { useState } from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import Button from "@component/common/Button";
import Checkbox from "@component/common/Checkbox";

export default function ProfileContainer() {
  return (
    <S.ProfileBox>
      <div className="wrap">
        <S.Profile>
          <S.ProfileImg />
          <S.ProfileDesc>
            <S.ProfileTitle>{""}</S.ProfileTitle>
            <S.ProfileUl>
              <S.ProfileLi>견종 : &nbsp;{""}</S.ProfileLi>
              <S.ProfileLi>성별 : &nbsp;{"" ? "M" : "F"}</S.ProfileLi>
              <S.ProfileLi>출생일 : &nbsp;{"dogProfile.birthDate"}</S.ProfileLi>
              <S.ProfileLi>브리더명 : &nbsp;{"dogProfile.name"}</S.ProfileLi>
              <S.ProfileLi>{"dogProfile.isBreederVerified"}</S.ProfileLi>
            </S.ProfileUl>
          </S.ProfileDesc>
        </S.Profile>
        <S.Detail>
          <S.DetailTitle>상세설명</S.DetailTitle>
          <S.DetailContent>{"dogProfile.management"}</S.DetailContent>
        </S.Detail>
      </div>
      <div className="agreement">
        <Checkbox label={""} value={false} />
        <p>
          본인은 분양신청서를 작성함에 있어 브리더가 해당 서류를 열람하도록
          동의합니다.
          <br />
          또한, 법적 문제 발생 시 사전 통보 없이 관련 서류를 경찰 또는 법 집행
          당국에 제출할 수 있음을 인지하고 동의합니다.
        </p>
      </div>
      <S.ButtonWrap>
        <Button>다음</Button>
        <Button>취소</Button>
      </S.ButtonWrap>
    </S.ProfileBox>
  );
}
