import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "../../../component/Header/Header";
import * as S from "./styles";

const BreedingComplete = () => {
  const [img, setImg] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;

  useEffect(() => {
    setImg(state);
  }, []);

  console.log();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Container>
          <S.CustomImage src={state} alt="" />
          <S.TextBox>
            분양 신청이 완료되었습니다.{"\n"}강아지 분양받기까지 일주일 정도
            소요됩니다.
          </S.TextBox>
          <S.TextBox>
            <S.CustomSpan>분양승인</S.CustomSpan>시, 마이페이지 {">"}{" "}
            분양신청내역에서
            {"\n"}
            <S.CustomSpan>브리더 정보</S.CustomSpan>를 확인할 수 있습니다.
          </S.TextBox>
          <S.Button onClick={handleClick}>홈으로</S.Button>
        </S.Container>

        {/* <S.TopContainer>
        <img src={img} alt="" />
        <S.TopContainerText>
          분양 신청이 완료되었습니다.{"\n"}강아지 분양받기까지 일주일 정도
          소요됩니다.
        </S.TopContainerText>
      </S.TopContainer>
      <S.BottomContainer>
        <S.BoldText>분양승인</S.BoldText>시, 마이페이지 {">"} 분양신청내역에서
        {"\n"}
        <S.BoldText>브리더 정보</S.BoldText>를 확인할 수 있습니다.
      </S.BottomContainer>
      */}
      </S.Wrapper>
    </>
  );
};

export default BreedingComplete;
