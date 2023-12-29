import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setPhoneNumber,
  setVerificationCode,
  setPhoneNumberCheck,
} from "../../../redux/Register/CheckPhoneNumberSlice";
import Swal from "sweetalert2";
import alertList from "../../../utils/Swal1";
import { post } from "../../../api/api";
import { CertificationCheckResponse } from "../../../types/authType";

import {
  PhoneNumberArea,
  PhoneNumberTextArea,
  PhoneNumberText,
  PhoneNumberInputTop,
  PhoneNumberInput,
  PhoneNumberButton,
  PhoneNumberInputBottom,
  PhoneNumberCheckInput,
  PhoneNumberCheckButton,
} from "./RegisterContentDetailStyle";

const PhoneNumberContent = () => {
  const dispatch = useDispatch();
  const phoneNumber = useSelector(
    (state: RootState) => state.phonenumber.phoneNumber,
  );

  const verificationCode = useSelector(
    (state: RootState) => state.phonenumber.verificationCode,
  );

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setPhoneNumber(
        e.target.value
          .replace(/[^0-9]/g, "")
          .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`),
      ),
    );
    dispatch(setPhoneNumberCheck(false));
  };

  const handleVerificationCodeChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch(setVerificationCode(e.target.value));
  };

  const sendVerificationCode = async () => {
    if (!phoneNumber) {
      Swal.fire(alertList.infoMessage("휴대전화 번호를 입력해주세요."));
      return;
    }

    try {
      const response = await post<CertificationCheckResponse>("/sms/send", {
        to: phoneNumber,
      });

      if (response.data.status === "SUCCESS") {
        Swal.fire(alertList.successMessage("인증번호가 발송되었습니다."));
      } else if (response.data.status === "FAIL") {
        Swal.fire(alertList.errorMessage("올바른 전화번호 형식이 아닙니다."));
      }
    } catch (error) {
      Swal.fire(
        alertList.errorMessage("인증번호 발송 중 오류가 발생했습니다."),
      );
    }
  };

  const verifyCode = async () => {
    try {
      const response = await post<CertificationCheckResponse>("/sms/verify", {
        phoneNumber,
        code: verificationCode,
      });

      if (response.data.status === "SUCCESS") {
        dispatch(setPhoneNumberCheck(true));
        Swal.fire(alertList.successMessage("인증 성공!"));
      } else {
        dispatch(setPhoneNumberCheck(false));
        Swal.fire(alertList.errorMessage("인증 실패!"));
      }
    } catch (error) {
      Swal.fire(alertList.errorMessage("인증 중 오류가 발생했습니다."));
    }
  };

  return (
    <PhoneNumberArea>
      <PhoneNumberTextArea>
        <PhoneNumberText>휴대전화</PhoneNumberText>
      </PhoneNumberTextArea>
      <PhoneNumberInputTop>
        <PhoneNumberInput
          type="text"
          placeholder="전화번호"
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
        />
        <PhoneNumberButton onClick={sendVerificationCode}>
          인증요청
        </PhoneNumberButton>
      </PhoneNumberInputTop>
      <PhoneNumberInputBottom>
        <PhoneNumberCheckInput
          type="text"
          value={verificationCode}
          onChange={handleVerificationCodeChange}
          placeholder="인증번호"
        />
        <PhoneNumberCheckButton onClick={verifyCode}>
          확인
        </PhoneNumberCheckButton>
      </PhoneNumberInputBottom>
    </PhoneNumberArea>
  );
};

export default PhoneNumberContent;
