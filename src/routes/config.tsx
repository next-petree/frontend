import { NEED_TO_LOGIN, SESSION_EXPIRED } from "@assets/constant/number";
import _ from "lodash";
import { FC, useCallback, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const errorCodes = [SESSION_EXPIRED, NEED_TO_LOGIN];

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  const error = "error"; // 변경 예정
  const location = useLocation();
  const { pathname, state } = location;
  const renderContent = useCallback(() => {
    if (
      _.negate(_.includes)(errorCodes, _.get(error, "data.code")) ||
      _.get(state, "from") === pathname
    ) {
      return children;
    }
    return <Navigate to="/login" state={{ from: pathname }} />;
  }, [children, error, state, pathname]);
  return <>{renderContent()}</>;
};
// scroll top 애니메이션
type ScrollToTopProps = {
  targetElement: HTMLElement | null;
  children: React.ReactNode;
};
export const ScrollToTop = ({ targetElement, children }: ScrollToTopProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!targetElement) return;
    targetElement.scrollTo(0, 0);
  }, [targetElement, pathname]);

  return <>{children}</>;
};

const AuthenticatedComponent = ({ auth, admin, children }: any) => {
  // 로그인 상태값 나중에 비즈니스 훅으로 처리 예정
  const isLogin = true;
  const authority = "admin";
  let childComponent = children;
  if (auth) {
    if (!isLogin) childComponent = <Navigate to={"/login"} />;
    if (admin && !(isLogin && authority === "admin"))
      childComponent = <Navigate to={"/login"} />;
  }
  return childComponent;
};
export { AuthenticatedComponent };
