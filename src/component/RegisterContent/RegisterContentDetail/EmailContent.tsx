import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setEmail,
  setEmailCheck,
} from "../../../redux/Register/CheckEmailSlice";
import { get } from "../../../api/api";
import { CertificationCheckResponse } from "../../../types/authType";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";

import {
  EmailArea,
  EmailTextArea,
  EmailText,
  EmailInfomationText,
  EmailInputArea,
  EmailInput,
  EmailCheckButton,
} from "./RegisterContentDetailStyle";

const EmailContent = () => {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.email.email);

  //이메일
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setEmail(e.target.value));
    dispatch(setEmailCheck(false));
  };

  const handleEmailCheck = async () => {
    if (!email) {
      Swal.fire(alertList.infoMessage("이메일을 입력해주세요."));
      return;
    }

    try {
      const response = await get<CertificationCheckResponse>("/email/check", {
        params: { email: email },
      });

      if (response.data.status === "SUCCESS") {
        dispatch(setEmailCheck(true));
        Swal.fire(alertList.successMessage("사용 가능한 이메일입니다."));
      } else {
        dispatch(setEmailCheck(false));
        Swal.fire(alertList.errorMessage("이미 사용 중인 이메일입니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("이메일 중복 확인 중 오류가 발생했습니다."),
      );
    }
  };

  return (
    <EmailArea>
      <EmailTextArea>
        <EmailText>이메일</EmailText>
        <EmailInfomationText>2~10자 이내</EmailInfomationText>
      </EmailTextArea>
      <EmailInputArea>
        <EmailInput
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="breeder@email.com"
        />
        <EmailCheckButton onClick={handleEmailCheck}>중복확인</EmailCheckButton>
      </EmailInputArea>
    </EmailArea>
  );
};

export default EmailContent;
