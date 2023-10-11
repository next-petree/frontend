import IMAGE from "assets/images/character.svg";
import Button from "@component/Common/Button";
import Input from "@component/Common/Input";
import * as S from "./style";
import { ChangeEvent } from "react";
import { COLOR } from "@assets/constant/style";
export default function FindEmail() {
  return (
    <S.Container>
      <S.Span>이메일 찾기</S.Span>
      <S.ContainerWrap>
        <S.Image src={IMAGE} alt="find image" />
        <S.Box>
          <Input
            label="이름"
            type="text"
            value={""}
            size={"lg"}
            onChange={function (e: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }}
          />
          <S.Wrap>
            <Input
              label="휴대번호"
              type="text"
              value={""}
              size={"lg"}
              onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <Input
              type="text"
              label={""}
              value={""}
              size={"lg"}
              onChange={function (e: ChangeEvent<HTMLInputElement>): void {
                throw new Error("Function not implemented.");
              }}
            />
            <S.TextButton
              style={{ marginBottom: "4rem", justifyContent: "right" }}
            >
              비밀번호 찾기
            </S.TextButton>
          </S.Wrap>
        </S.Box>
      </S.ContainerWrap>
      <Button backgroundColor={COLOR.primary}>확인</Button>
    </S.Container>
  );
}
