import React from 'react';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../constants';

interface PrivateRouteProps {
  children: React.ReactNode;
}

export default function PrivateRoute({ children }: PrivateRouteProps): React.ReactNode {
  // TODO: 로그인 여부에 따라서 children을 렌더링하거나 로그인 페이지로 이동시키기
  const isLogin = true;

  if (!isLogin) {
    return <Navigate to={PATHS.login} replace={true} />;
  }

  return children;
}
