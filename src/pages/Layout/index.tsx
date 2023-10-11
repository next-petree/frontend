import useUserData from "@hooks/useUserData";
import { FC, Suspense, useEffect } from "react";
import { useNavigate } from "react-router";
import * as S from "@pages/Layout/style";
import { Outlet, useLocation } from "react-router-dom";
import { getGlobalState } from "utils/getGlobalState";
import SuspendFallbackLoading from "@component/Common/SuspendFallbackLoading";
import LayoutPageHeader from "@pages/Layout/header";
import Footer from "./footer";

const LayoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { onWindowResize } = useUserData();
  const { device, collapsed } = getGlobalState();

  useEffect(() => {
    location.pathname === "/" && navigate("/");
  }, [navigate, location]);

  useEffect(() => {
    window.addEventListener("resize", onWindowResize);
    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, [onWindowResize]);

  return (
    <S.LayoutPageContainer>
      <LayoutPageHeader />
      <S.LayoutPageContent>
        <Suspense fallback={<SuspendFallbackLoading />}>
          <Outlet />
        </Suspense>
      </S.LayoutPageContent>
      <Footer />
    </S.LayoutPageContainer>
  );
};

export default LayoutPage;
