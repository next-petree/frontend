import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { post } from "../../../api/api";
import CustomLayout from "../../Layout/CustomLayout";
import WhiteBox from "../../../component/WhiteBox/WhiteBox";
import * as S from "./Styles1";

const RegisterFillOut = () => {
  const [firstTextarea, setFirstTextarea] = useState("");
  const [secondTextarea, setSecondTextarea] = useState("");

  const [dogId, setDogId] = useState<number>();
  const [breederId, setBreederid] = useState<number>();
  const [imagesUrl, setImagesUrl] = useState<string>();
  const navigate = useNavigate();

  const location = useLocation();

  const { state } = location;

  const handleCancelClick = () => {
    navigate(-2);
  };

  interface IReservation {
    id: number;
    breederId: number;
    firstTextarea: string;
    secodTextarea: string;
  }

  interface IRegisterResponse {
    status: string;
    data: string;
    msg: string;
  }

  useEffect(() => {
    setDogId(state.id);
    setBreederid(state.breederId);
    setImagesUrl(state.imagesUrl[0]);
  }, []);

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const revervationData = {
      dogId,
      breederId,
      pledgeContent1: firstTextarea,
      pledgeContent2: secondTextarea,
    };

    try {
      const response = await post<IRegisterResponse>(
        "/me/matchings",
        revervationData,
      );
      if (response.data.status === "SUCCESS") {
        console.log("예약 성공", response.data);
        alert("예약에 성공했습니다!");
        navigate("/breeding-complete", { state: imagesUrl });
      } else if (response.data.status === "FAIL") {
        alert(response.data);
      }
    } catch (error: any) {
      console.error(
        "예약 에러:",
        error.response ? error.response.data : error.message,
      );
      alert("예약 과정에서 오류가 발생했습니다.");
    }
  };

  return (
    <CustomLayout height={1185}>
      <S.InnerContainer>
        <S.InnerTopContainer>
          <S.TitleContainer>분양 신청하기</S.TitleContainer>
          <S.FormContainer id="form" onSubmit={submitHandler}>
            <S.FormBox>
              <S.FormBoxQuestion>
                1. 반려동물을 분양하려는 사유에 대해 작성하세요.
              </S.FormBoxQuestion>

              <S.FormBoxTextarea
                name="reason"
                placeholder="분양하려는 사유를 작성해주세요"
                value={firstTextarea}
                onChange={e => setFirstTextarea(e.target.value)}
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
                onChange={e => setSecondTextarea(e.target.value)}
              />
              <S.FormBoxTextareaContainer top={374}>
                <S.TextLength>{secondTextarea.length}/2000</S.TextLength>
              </S.FormBoxTextareaContainer>
            </S.FormBox>
          </S.FormContainer>
        </S.InnerTopContainer>
        <S.ButtonGroup>
          <S.Button primary type="submit" form="form">
            예약신청
          </S.Button>
          <S.Button onClick={handleCancelClick}>취소</S.Button>
        </S.ButtonGroup>
      </S.InnerContainer>
      <WhiteBox top={284} left={250} width={1420} height={830}></WhiteBox>
    </CustomLayout>
  );
};

export default RegisterFillOut;
