import { SignUpFormController } from "@component/SignUp/SignUpFormController";
import { FC } from "react";

/**
 * 회원가입의 sms인증요청 버튼 클릭후 alert창으로 인증번호가 발송되었습니다. + 3분동안 초세기
 * 브리더 회원이 회원가입할때, 분양희망자가 회원가입할때의 주소(활동지역) 부분의 input box크기 늘릴 필요 있음.
 * 브리더회원의 회원정보 수정 및 분양희망자회원의 회원정보수정에서 왼쪽의 input box와 오른쪽의 input box 피그마대로 적용필요
 *
 *
 *
 **/

const SignUpPage: FC = () => {
  return <SignUpFormController />;
};

export default SignUpPage;
