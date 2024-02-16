import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Header from "../../../component/Header/Header";
import * as S from "./Styles1";
import CustomLayout from "../../Layout/CustomLayout";

const BreedingComplete = () => {
  const [img, setImg] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const { state } = location;

  useEffect(() => {
    setImg(state);
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  return (
      <CustomLayout height={1080}>
        <S.Container>
          <S.CustomImage src={img} alt="" />
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
      </CustomLayout>
  );
};

export default BreedingComplete;
