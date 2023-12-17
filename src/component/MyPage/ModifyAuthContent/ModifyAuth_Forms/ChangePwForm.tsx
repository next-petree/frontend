import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  Button,
  Container,
  Errmsg,
  Form2,
  Input,
  Label,
  Pw,
  Pws,
  SeeBtn,
  Store,
  Title,
} from "./styles";
import { useEffect } from "react";
import Swal from "sweetalert2";
import alertList from "../../../../utils/swal";
import { put } from "../../../../api/api";
import { MemberInfoUrl } from "../../../../utils/mypage_url";
import {
  ChangePassword_400_Response,
  IChangePasswordForm,
  ResultResponse,
} from "../../../../types/mypage_type";
import axios, { AxiosError } from "axios";
import React from "react";

const ChangePwForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    setError,
    clearErrors,
  } = useForm<IChangePasswordForm>();
  const [isShow, setIsShow] = useState({
    currentPassword: false,
    newPassword: false,
    newPasswordConfirmation: false,
  });
  const onShowPassword = (data: string) => {
    if (data === "currentPassword") {
      setIsShow({ ...isShow, currentPassword: !isShow.currentPassword });
    } else if (data === "newPassword") {
      setIsShow({ ...isShow, newPassword: !isShow.newPassword });
    } else {
      setIsShow({
        ...isShow,
        newPasswordConfirmation: !isShow.newPasswordConfirmation,
      });
    }
  };
  const onValid = async (data: IChangePasswordForm) => {
    const answer = await Swal.fire({
      ...alertList.doubleCheckMessage("비밀번호를 변경하시겠습니까?"),
      width: "350px",
    });
    if (answer.isConfirmed) {
      try {
        const url = MemberInfoUrl(true);
        const response = await put<ResultResponse>(url, {
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
          newPasswordConfirmation: data.newPasswordConfirmation,
        });
        Swal.fire({
          ...alertList.successMessage(response.data.data),
          width: "350px",
        });
      } catch (e) {
        if(axios.isAxiosError<ChangePassword_400_Response, any>(e)){
          if(e.response?.status === 401) {
            return Swal.fire({
              ...alertList.errorMessage("해당 회원을 찾을 수 없습니다"),
              width: "350px",
            });
          }
          Swal.fire({
            ...alertList.errorMessage("비밀번호 변경을 다시 확인해주세요"),
            width: "350px",
          });
          if(e.response?.data.data.currentPassword) {
            setError("currentPassword", { type: 'custom', message: e.response?.data.data.currentPassword })
          }
          if(e.response?.data.data.newPassword) {
            setError("newPassword", { type: 'custom', message: e.response?.data.data.newPassword })
          }
          if(e.response?.data.data.newPasswordConfirmation) {
            setError("newPasswordConfirmation", { type: 'custom', message: e.response?.data.data.newPasswordConfirmation })
          }
          if(typeof e.response?.data.data === "string") {
            setError("newPasswordConfirmation", { type: 'custom', message: e.response?.data.data })
          }
        }
      }
    }
  };

  useEffect(() => {}, []);
  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Form2 onSubmit={handleSubmit(onValid)}>
        <Pws>
          <Pw>
            <Label>현재 비밀번호 입력</Label>
            <Input
              $islen="mid"
              type={isShow.currentPassword ? "text" : "password"}
              {...register("currentPassword")}
            />
            <SeeBtn
              $isClicked={isShow.currentPassword}
              onClick={() => onShowPassword("currentPassword")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </SeeBtn>
          </Pw>
          {errors.currentPassword ? (
            <Errmsg
              $needMargin={true}
            >{`${errors.currentPassword.message}`}</Errmsg>
          ) : null}
          <span>비밀번호는 특수문자포함으로 4~16자 이내</span>
          <Pw>
            <Label>변경할 비밀번호 입력</Label>
            <Input
              $islen="mid"
              type={isShow.newPassword ? "text" : "password"}
              {...register("newPassword")}
            />
            <SeeBtn
              $isClicked={isShow.newPassword}
              onClick={() => onShowPassword("newPassword")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </SeeBtn>
          </Pw>
          {errors.newPassword ? (
            <Errmsg
              $needMargin={true}
            >{`${errors.newPassword.message}`}</Errmsg>
          ) : null}
          <Pw>
            <Label>변경할 비밀번호 확인</Label>
            <Input
              $islen="mid"
              type={isShow.newPasswordConfirmation ? "text" : "password"}
              {...register("newPasswordConfirmation")}
            />
            <SeeBtn
              $isClicked={isShow.newPasswordConfirmation}
              onClick={() => onShowPassword("newPasswordConfirmation")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            </SeeBtn>
          </Pw>
          {errors.newPasswordConfirmation ? (
            <Errmsg
              $needMargin={true}
            >{`${errors.newPasswordConfirmation.message}`}</Errmsg>
          ) : null}
        </Pws>
        <Store>
          <Button $isLong={true}>저장</Button>
        </Store>
      </Form2>
    </Container>
  );
};

export default ChangePwForm;
