import React from "react";
import Client from "api";
import { UserRequest, UserResponse, PWChangeRequest } from "types/api";

const breederDog = () => {
  const signIn = async (userRequest: UserRequest) => {
    try {
      const response = await Client.credentialsInstance.post<UserResponse>(
        `${Client.path.auth}/signIn`,
        userRequest
      );
      return response.data;
    } catch (error) {
      // 에러 처리
      console.error("로그인 에러:", error);
      throw error;
    }
  };

  const pwChange = async (pwChangeRequest: PWChangeRequest) => {
    try {
      const { newPassword } = pwChangeRequest;
      await Client.credentialsInstance.put(`${Client.path.api}/user/password`, {
        newPassword,
      });
    } catch (error) {
      // 에러 처리
      console.error("비밀번호 변경 에러:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await Client.credentialsInstance.post(`${Client.path.auth}/logout`);
    } catch (error) {
      // 에러 처리
      console.error("로그아웃 에러:", error);
      throw error;
    }
  };

  return {
    signIn,
    pwChange,
    logout,
  };
};

export default breederDog;
