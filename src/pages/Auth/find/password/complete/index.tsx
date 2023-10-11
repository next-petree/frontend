import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "assets/images/character.svg";
import Button from "@component/Common/Button";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import * as S from "./style";
import Input from "@component/Common/Input";
import { ChangeEvent } from "react";

export default function FindPasswordComplete() {
  const navigate = useNavigate();

  return (
    <DefaultLayout>
      <S.Image src={IMAGE} alt="find image" />
      <S.Span>비밀번호 찾기 완료</S.Span>
      <S.SpanColor>비밀번호를 변경해서 사용하세요.</S.SpanColor>
      <Input
        label={""}
        value={""}
        size={"lg"}
        type={""}
        onChange={function (e: ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <S.Wrap>
        <Button>변경하기</Button>
      </S.Wrap>
    </DefaultLayout>
  );
}
