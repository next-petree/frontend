import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/api";

import {
  Container,
  ContentArea,
  FindEmailOrPasswordTitle,
  CharacterImage,
  InnerContentArea,
  NameInputArea,
  PhoneNumberInputArea,
  PhoneNumberCheckInputArea,
  NameText,
  PhoneNumberText,
  NameInput,
  PhoneNumberInput,
  PhoneNumberCheckInput,
  PhoneNumberSendButton,
  PhoneNumberCheckButton,
  FindPasswordButtonArea,
  FindPasswordButton,
  FindEmailButton,
  CheckButtonArea,
  CheckButton,
} from "./FindEmailOrPasswordStyle";

type Props = {
  pageType: "findemail" | "findpassword";
};

type ApiResponse = {
  status: "SUCCESS" | "FAIL";
  data: {
    email?: string;

    code?: string;
  };
};

const FindEmailOrPasswordContent = ({ pageType }: Props) => {
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [phoneNumberChecked, setPhoneNumberChecked] = useState(false);
  const navigate = useNavigate();

  const sendSMS = async () => {
    try {
      const response = await post<ApiResponse>("/api/sms/send", {
        to: phoneNumber,
      });

      if (response.status === 200) {
        alert("인증 번호가 발송되었습니다.");
      } else {
        alert("문자 발송에 실패하였습니다.");
      }
    } catch (error) {
      console.error("SMS 발송 에러:", error);

      alert("전화번호를 정확히 입력해주세요.");

    }
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = ("" + value).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return value;
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPhoneNumber(e.target.value);
    setPhoneNumber(formattedValue);
  };

  const verifySMS = async () => {
    try {
      const response = await post<ApiResponse>("/api/sms/verify", {
        phoneNumber: phoneNumber,
        code: verificationCode,
      });

      if (response.data.status === "SUCCESS") {
        alert("인증에 성공하였습니다!");
        setPhoneNumberChecked(true);
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        alert(response.data.data.code);
      }
    } catch (error) {
      console.error("SMS 인증 에러:", error);

      alert("인증번호를 정확히 입력해주세요.");

    }
  };

  const findEmail = async () => {
    try {
      const response = await post<ApiResponse>("/api/email/find", {
        nickname: nickname,
        phoneNumberChecked,
      });

      if (response.data.status === "SUCCESS") {
        navigate("/findemailresult", {
          state: { email: response.data.data.email },
        });
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        alert(response.data.data.code);
      }
    } catch (error) {
      console.error("이메일 찾기 에러:", error);
      alert("이메일 찾기 중 오류가 발생하였습니다.");
    }
  };


  const findPassword = async () => {
    try {
      const response = await post<ApiResponse>("/api/pwd/reset", {
        email: nickname,
        phoneNumberChecked,
        phoneNumber: phoneNumber,
      });

      if (response.data.status === "SUCCESS") {
        navigate("/changepassword", {
          state: { password: response.data.data },
        });
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        alert(response.data.data.code);
      }
    } catch (error) {
      console.error("비밀번호 찾기 에러:", error);

      alert("비밀번호 찾기 중 오류가 발생하였습니다.");
    }
  };


  return (
    <Container>
      <FindEmailOrPasswordTitle>
        {pageType === "findemail" ? "이메일 찾기" : "비밀번호 찾기"}
      </FindEmailOrPasswordTitle>
      <ContentArea>
        <CharacterImage />
        <InnerContentArea>
          <NameInputArea>

            <NameText>{pageType === "findemail" ? "이름" : "이메일"}</NameText>

            <NameInput
              value={nickname}
              onChange={e => setNickname(e.target.value)}
            />
          </NameInputArea>

          <PhoneNumberInputArea>
            <PhoneNumberText>연락처</PhoneNumberText>
            <PhoneNumberInput
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            ></PhoneNumberInput>
            <PhoneNumberSendButton onClick={sendSMS}>
              인증 요청
            </PhoneNumberSendButton>
          </PhoneNumberInputArea>

          <PhoneNumberCheckInputArea>
            <PhoneNumberCheckInput
              value={verificationCode}
              onChange={e => setVerificationCode(e.target.value)}
            ></PhoneNumberCheckInput>
            <PhoneNumberCheckButton onClick={verifySMS}>
              인증 확인
            </PhoneNumberCheckButton>
          </PhoneNumberCheckInputArea>

          <FindPasswordButtonArea>
            {pageType === "findemail" ? (
              <FindPasswordButton to="/findpassword">
                비밀번호 찾기
              </FindPasswordButton>
            ) : (
              <FindEmailButton to="/findemail">이메일 찾기</FindEmailButton>
            )}
          </FindPasswordButtonArea>
        </InnerContentArea>
      </ContentArea>

      <CheckButtonArea>

        {pageType === "findemail" ? (
          <CheckButton onClick={findEmail}>확인</CheckButton>
        ) : (
          <CheckButton onClick={findPassword}>확인</CheckButton>
        )}
      </CheckButtonArea>
    </Container>
  );
};

export default FindEmailOrPasswordContent;
