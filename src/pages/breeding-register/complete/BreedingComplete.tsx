import { useNavigate } from "react-router-dom";

import Header from "../../../component/Header/Header";
import { IMG3 } from "../../../assets/images";
import * as S from "./styles";

const BreedingComplete = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.Wrapper>
      <Header />
      <S.TopContainer>
        <img src={IMG3} alt="" />
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
      <S.ButtonContainer>
        <S.Button onClick={handleClick}>홈으로</S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default BreedingComplete;
