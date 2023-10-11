import { ChangeEvent } from "react";
import Button from "@component/Common/Button";
import LOGO from "assets/images/logo_login.svg";
import * as S from "./style";
import Input from "@component/Common/Input";
import DefaultLayout from "@pages/Layout/DefaultLayout";
import { COLOR, FONT } from "@assets/constant/style";
const Login = () => {
  return (
    <DefaultLayout>
      <S.Logo src={LOGO} alt="logo" />
      <S.SpanColor>반려동물, 새로운 당신의 가족입니다.</S.SpanColor>
      <S.Span>또 하나의 가족 반려동물을 분양하세요.</S.Span>
      <S.Box>
        <Input
          label="이메일"
          type="email"
          value={"email"}
          size={"lg"}
          onChange={(e) => console.log(e.target.value)}
        />
        <Input
          label="비밀번호"
          type="password"
          value={"password"}
          onChange={(e) => console.log(e.target.value)}
          size={"lg"}
        />
      </S.Box>
      <S.TextButton style={{ marginBottom: "4rem", justifyContent: "right" }}>
        아이디 / 비밀번호 찾기
      </S.TextButton>
      <S.BtnContainer>
        <Button
          fontSize={FONT.descBtn}
          buttonSize="md"
          backgroundColor={COLOR.primary}
        >
          로그인
        </Button>
        <Button
          fontSize={FONT.descBtn}
          buttonSize="md"
          backgroundColor="#FEE500"
          style={{
            color: "#fff",
          }}
        >
          카카오톡 로그인
        </Button>
      </S.BtnContainer>

      <S.TextButton>아직 회원이 아니라면? 회원가입</S.TextButton>
    </DefaultLayout>
  );
};

export default Login;
