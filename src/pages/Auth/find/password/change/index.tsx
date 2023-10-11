import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IMAGE from "assets/images/character.svg";
import Button from "@component/Common/Button";
import Input from "@component/Common/Input";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import * as S from "./style";

export default function FindPasswordChange() {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  return (
    <DefaultLayout>
      <S.Image src={IMAGE} alt="find image" />
      <S.Span>비밀번호 변경하기</S.Span>
      <Input
        label="임시 비밀번호"
        type="text"
        value={"1234"}
        size={"lg"}
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
      <Input
        label="새 비밀번호"
        type="text"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        size={"lg"}
      />
      <Input
        label="비밀번호 확인"
        type="text"
        value={passwordCheck}
        onChange={(e) => setPasswordCheck(e.target.value)}
        size={"lg"}
      />
      <S.Wrap>
        <Button onClick={() => navigate("/auth/find-password-done")}>
          변경하기
        </Button>
      </S.Wrap>
    </DefaultLayout>
  );
}
