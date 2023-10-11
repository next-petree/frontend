import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMAGE from "assets/images/character.svg";
import Button from "@component/Common/Button";
import Input from "@component/Common/Input";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import * as S from "./style";

export default function FindPassword() {
  return (
    <DefaultLayout>
      <S.Span>비밀번호 찾기</S.Span>
      <S.ContainerWrap>
        <S.Image src={IMAGE} alt="find image" />
        <S.Box>
          <Input
            label="아이디"
            type="text"
            size={"lg"}
            value={""}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <Input
            label="이름"
            type="text"
            size={"lg"}
            value={""}
            onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <S.Wrap>
            <Input
              label="휴대번호"
              type="text"
              value={""}
              size={"lg"}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              type="text"
              label={""}
              value={""}
              size={"lg"}
              onChange={function (
                e: React.ChangeEvent<HTMLInputElement>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </S.Wrap>
        </S.Box>
      </S.ContainerWrap>
      <Button>확인</Button>
    </DefaultLayout>
  );
}
