import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../../api/api";
import { getToken } from "../../api/token";

interface KakaoLoginResponse {
  status: "SUCCESS" | "FAIL";
  data: {
    tokenType: string;
    accessToken: string;
    accessTokenExpiresIn: string;
    refreshToken: string;
    refreshTokenExpiresIn: string;
    createdAt: string;
    profileImgUrl: string;
  };
}

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(location.search).get("code");

    if (code) {
      handleKakaoLogin(code);
    }
  }, [location]);

  const handleKakaoLogin = async (code: string) => {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const token = getToken("accessToken");

    try {
      const response = await get<KakaoLoginResponse>(
        `${REACT_APP_API_URL}/api/oauth/kakao/callback?code=${code}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.status === "SUCCESS") {
        localStorage.setItem("accessToken", response.data.data.accessToken);
        localStorage.setItem("refreshToken", response.data.data.refreshToken);
        navigate("/");
      }
    } catch (error) {
      console.error("Kakao login error:", error);
    }
  };

  return <div>카카오 로그인 중...</div>;
};

export default KakaoCallback;
