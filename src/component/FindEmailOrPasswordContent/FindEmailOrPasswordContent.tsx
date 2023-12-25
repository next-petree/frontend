import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { post } from "../../api/api";
import alertList from "../../utils/Swal1";
import Swal from "sweetalert2";

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
      const response = await post<ApiResponse>("/sms/send", {
        to: phoneNumber,
      });

      if (response.status === 200) {
        await Swal.fire(alertList.successMessage("인증번호가 발송되었습니다."));
      } else {
        await Swal.fire(
          alertList.errorMessage("인증번호 발송에 실패했습니다."),
        );
      }
    } catch (error) {
      await Swal.fire(
        alertList.errorMessage("전화번호를 정확히 입력해주세요."),
      );
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
      const response = await post<ApiResponse>("/sms/verify", {
        phoneNumber: phoneNumber,
        code: verificationCode,
      });

      if (response.data.status === "SUCCESS") {
        await Swal.fire(alertList.successMessage("인증에 성공했습니다."));
        setPhoneNumberChecked(true);
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        await Swal.fire(alertList.errorMessage(`${response.data.data.code}`));
      }
    } catch (error) {
      await Swal.fire(
        alertList.errorMessage("인증과정에서 에러가 발생했습니다."),
      );
    }
  };

  const findEmail = async () => {
    try {
      const response = await post<ApiResponse>("/email/find", {
        nickname: nickname,
        phoneNumberChecked,
      });

      if (response.data.status === "SUCCESS") {
        navigate("/find-email-result", {
          state: { email: response.data.data.email },
        });
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        await Swal.fire(alertList.errorMessage(`${response.data.data.code}`));
      }
    } catch (error) {
      await Swal.fire(
        alertList.errorMessage("이메일 찾기 중 에러가 발생했습니다"),
      );
    }
  };

  const findPassword = async () => {
    try {
      const response = await post<ApiResponse>("/pwd/reset", {
        email: nickname,
        phoneNumberChecked,
        phoneNumber: phoneNumber,
      });

      if (response.data.status === "SUCCESS") {
        navigate("/change-password", {
          state: { password: response.data.data },
        });
      } else if (
        response.data.status === "FAIL" &&
        typeof response.data.data !== "string"
      ) {
        await Swal.fire(alertList.errorMessage(`${response.data.data.code}`));
      }
    } catch (error) {
      await Swal.fire(
        alertList.errorMessage("비밀번호 찾기 중 에러가 발생했습니다"),
      );
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
              <FindPasswordButton to="/find-password">
                비밀번호 찾기
              </FindPasswordButton>
            ) : (
              <FindEmailButton to="/find-email">이메일 찾기</FindEmailButton>
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
