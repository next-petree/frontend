import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../api/api";
import { setToken } from "../../api/token";

type LoginResponse = {
  status: string;
  data: {
    grantType: string;
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
    profileImgUrl: string | null;
  };
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await post<LoginResponse>("/login", userData);
      if (response.data.status === "SUCCESS") {
        setToken("accessToken", response.data.data.accessToken);
        setToken("refreshToken", response.data.data.refreshToken);
        return response.data.data; // 성공한 경우 데이터 반환
      } else {
        return rejectWithValue(response.data.data); // 실패한 경우 에러 메시지 반환
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response ? error.response.data : error.message,
      );
    }
  },
);
