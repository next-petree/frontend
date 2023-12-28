import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { get } from "../../api/api";
import { getToken } from "../../api/token";
import Swal from "sweetalert2";
import alertList from "../../utils/Swal1";

interface KakaoLoginResponse {
  status: "SUCCESS" | "FAIL";
  data: {
    grantType: string;
    accessToken: string;
    accessTokenExpireTime: string;
    refreshToken: string;
    refreshTokenExpireTime: string;
    profileImgUrl: string;
  };
}

const KakaoCallback = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  useEffect(() => {
    const code = new URL(document.location.toString()).searchParams.get("code");

    console.log(code);
    if (code) {
      handleKakaoLogin(code);
    }
  }, [location]);

  const handleKakaoLogin = async (code: string) => {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const token = getToken("accessToken");

    try {
      const response = await get<KakaoLoginResponse>(
        `${REACT_APP_API_URL}/oauth/kakao/callback?code=${code}`,
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
      } else {
        const errorMessage =
          typeof response.data.data === "string"
            ? response.data.data
            : "로그인에 실패했습니다.";
        await Swal.fire(alertList.errorMessage(errorMessage));
        setError("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("Kakao login error:", error);
      await Swal.fire(
        alertList.errorMessage("카카오 로그인 중 오류가 발생했습니다."),
      );
      navigate("/login");
    }
  };

  return (
    <div>
      카카오 로그인 중...
      {error && <div>{error}</div>}
    </div>
  );
};

export default KakaoCallback;
