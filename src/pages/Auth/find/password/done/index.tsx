import { useNavigate } from "react-router-dom";
import IMAGE from "assets/images/character.svg";
import Button from "@component/Common/Button";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import * as S from "./style";
export default function FindPasswordDone() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <S.Image src={IMAGE} alt="find image" />
      <S.Span>비밀번호가 변경되었습니다.</S.Span>
      <S.Wrap>
        <Button>로그인</Button>
      </S.Wrap>
    </DefaultLayout>
  );
}
