import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "assets/images/character.svg";
import * as S from "./style";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import Button from "@component/Common/Button";
import Input from "@component/Common/Input";
import { ChangeEvent } from "react";
export default function FindEmailComplete() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <S.Image src={IMAGE} alt="find image" />
      <S.Span>이메일 찾기 완료</S.Span>
      <Input
        label="이메일"
        type="text"
        value={"ID123@@gmail.com"}
        size={"lg"}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <S.Wrap>
        <Button>로그인</Button>
        <S.Gap />
        <Button>비밀번호 찾기</Button>
      </S.Wrap>
    </DefaultLayout>
  );
}
