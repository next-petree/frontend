import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import CustomLayout from "../../CustomLayout/CustomLayout";
import WhiteBox from "../../../component/WhiteBox/WhiteBox";
import * as S from "./styles";

const RegisterFillOut = () => {
  const [firstTextarea, setFirstTextarea] = useState("");
  const [secondTextarea, setSecondTextarea] = useState("");

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate(-2);
  };

  return (
    <CustomLayout height={1185}>
      <S.InnerContainer>
        <S.InnerTopContainer>
          <S.TitleContainer>분양 신청하기</S.TitleContainer>
          <S.FormContainer>
            <S.FormBox>
              <S.FormBoxQuestion>
                1. 반려동물을 분양하려는 사유에 대해 간단히 작성하세요.
              </S.FormBoxQuestion>

              <S.FormBoxTextarea
                name="reason"
                placeholder="분양하려는 사유를 작성해주세요"
                value={firstTextarea}
                onChange={(e) => setFirstTextarea(e.target.value)}
              />
              <S.FormBoxTextareaContainer top={120}>
                <S.TextLength>{firstTextarea.length}/2000</S.TextLength>
              </S.FormBoxTextareaContainer>
            </S.FormBox>
            <S.FormBox>
              <S.FormBoxQuestion>
                2. 해당 견종을 분양하는 것에 있어 자신의 마음가짐을
                작성해주세요.
              </S.FormBoxQuestion>
              <S.FormBoxTextarea
                name="reason"
                placeholder="분양 이유와 마음가짐을 작성해주세요"
                value={secondTextarea}
                onChange={(e) => setSecondTextarea(e.target.value)}
              />
              <S.FormBoxTextareaContainer top={374}>
                <S.TextLength>{secondTextarea.length}/2000</S.TextLength>
              </S.FormBoxTextareaContainer>
            </S.FormBox>
          </S.FormContainer>
        </S.InnerTopContainer>
        <S.ButtonGroup>
          <Link to={"/breeding-complete"}>
            <S.Button primary>예약신청</S.Button>
          </Link>
          <S.Button onClick={handleCancelClick}>취소</S.Button>
        </S.ButtonGroup>
      </S.InnerContainer>
      <WhiteBox top={284} left={250} width={1420} height={830}></WhiteBox>
    </CustomLayout>
  );
};

export default RegisterFillOut;
