import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import {
  setPassword,
  setCheckPassword,
  setPasswordError,
} from "../../../redux/Register/CheckPasswordSlice";
import {
  PasswordArea,
  PasswordTextArea,
  PasswordText,
  PasswordInfomationText,
  PasswordInputArea,
  PasswordInput,
  PasswordCheckArea,
  PasswordCheckText,
  PasswordCheckInput,
  PasswordErrorText,
} from "./RegisterContentDetailStyle";

const PasswordContent = () => {
  const dispatch = useDispatch();
  const { password, checkPassword, passwordError } = useSelector(
    (state: RootState) => state.password,
  );

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPassword(e.target.value));
    if (checkPassword) {
      validatePassword(e.target.value, checkPassword);
    }
  };

  const handleCheckPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const checkPwd = e.target.value;
    dispatch(setCheckPassword(checkPwd));
    validatePassword(password, checkPwd);
  };

  const validatePassword = (pwd: string, checkPwd: string) => {
    if (pwd !== checkPwd) {
      dispatch(setPasswordError("비밀번호가 일치하지 않습니다."));
    } else {
      dispatch(setPasswordError(""));
    }
  };
  return (
    <>
      <PasswordArea>
        <PasswordTextArea>
          <PasswordText>비밀번호</PasswordText>
          <PasswordInfomationText>
            4~16자로 특수문자를 포함
          </PasswordInfomationText>
        </PasswordTextArea>
        <PasswordInputArea>
          <PasswordInput
            type="password"
            placeholder="비밀번호"
            onChange={handlePasswordChange}
          />
        </PasswordInputArea>
      </PasswordArea>
      <PasswordCheckArea>
        <PasswordCheckText>비밀번호 확인</PasswordCheckText>
        <PasswordCheckInput
          type="password"
          placeholder="비밀번호 확인"
          onChange={handleCheckPasswordChange}
        />
        <PasswordErrorText>{passwordError}</PasswordErrorText>
      </PasswordCheckArea>
    </>
  );
};

export default PasswordContent;
